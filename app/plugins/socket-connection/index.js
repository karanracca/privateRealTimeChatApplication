'use strict';
const signale = require('signale');
const handler = require('./handler')

module.exports = {
    name: 'socket-connection',
    register: function(server, options) {
        
        const io = require('socket.io')(server.listener);
        
        //Method called on new connection
        io.on('connection', function (socket) {
            
            for (let key in io.sockets.sockets) {
                
                console.log(key);
            }

            signale.info(`User ${JSON.parse(socket.handshake.query.user).fullname} Connected!`);
            
            /**
             * Boradcast event for new user
             */
            io.emit('USER_LIST_UPDATE', JSON.parse(socket.handshake.query.user));

            socket.user = JSON.parse(socket.handshake.query.user);

            socket.on('GET_ONLINE_USER_LIST', (fn) => {
                let users = handler.getOnlineUsers(io);
                fn(users);
            });

            socket.on('CREATE_CHAT_ROOM', (user, message) => {
                
                signale.info('Create chat room for', user.fullname, 'From', socket.user.fullname);
                
                let receiverSocket = handler.findOnlineUser(io, user);

                if (receiverSocket) {
                    receiverSocket.emit('PRIVATE_MESSAGE', message, socket.user);
                } else {
                    signale.error('Cannot find receiver');
                }   
            });

            socket.on('disconnect', (reason) => {
                socket.disconnect();
                signale.info('Disconnected', reason);
            });
        });
    }
};
