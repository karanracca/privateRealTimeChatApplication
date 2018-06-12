'use strict';
const handler = require('./handler');

module.exports = {
    name: 'user-plugin',
    register: function(server, options, next) {
        server.route([{
            method: 'POST',
            path: '/login',
            handler: handler.login
        },
        {
            method: 'POST',
            path: '/register',
            options: {
                payload: {
                    maxBytes: 5000000
                }
            },
            handler: handler.register
        },
        {
            method: 'GET',
            path: '/get_users',
            options: {
                auth: 'jwt'
            },
            handler: handler.getAllUsers
        }
    ]);
    }
};