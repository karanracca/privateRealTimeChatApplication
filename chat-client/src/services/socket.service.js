import io from 'socket.io-client';

export default function () {

    const socket = io('http://localhost:8000', {
        query: {
            user: localStorage.getItem('user')
        }
    });
    console.log('Socket', socket);

    function createChatRoom(user, msg) {
        socket.emit('CREATE_CHAT_ROOM', user, msg)
    }

    socket.on('PRIVATE_MESSAGE', (msg) => {
        console.log('Private Message', msg);
    })

    // function getPrivateMessages(onMessageReceived) {
    //     socket.on('PRIVATE_MESSAGE', function(msg) {
    //         onMessageReceived(msg);
    //     })
    // }

    function getOnlineUsers() {
        return new Promise ((res, rej) => {
            socket.emit('GET_ONLINE_USERS', (users) => {
                console.log('Online users', users);
                res(users);
            })
        })   
    }

    function currentUsersOnline (fn) {
        socket.on('CURRENT_USERS_ONLINE', (user) => {
            console.log('New user:', user);
            fn(user);
        })
    }

    return {
        createChatRoom,
        getOnlineUsers,
        currentUsersOnline,
        //getPrivateMessages
    }
}