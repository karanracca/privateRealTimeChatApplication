const envKey = key => {

    const env = process.env.NODE_ENV || 'development';

    const configuration = {
        development: {
            host: 'localhost',
            port: 8000
        }
    };

    return configuration[env][key];
};

const manifest = {
    server: {
        host: envKey('host'),
        port: envKey('port'),
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