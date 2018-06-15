const manifest = {
    server: {
        host: 'localhost',
        port: 8000,
        routes: {
            cors: true
        },
        router: {
            stripTrailingSlash: true
        }
    },
    register:
        {
            plugins: [{
                plugin: require('./database')
            }, {
                plugin: require('./auth')
            }, {
                plugin: require('../app/plugins/user')
            }, {
                plugin: require('../app/plugins/socket-connection')
            }]
        }
};

module.exports = manifest;