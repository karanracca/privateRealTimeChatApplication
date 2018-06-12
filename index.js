'use strict'

//TODO - Create a constants file to store all URL (mongo)
//TODO - Hash user password in mongoose model

const Glue = require('glue');
const manifest = require('./config/manifest');

const startServer = async function () {
    try {
        const server = await Glue.compose(manifest, { relativeTo: __dirname });
        await server.start();
        console.log('Server is listening on ' + server.info.uri.toLowerCase());
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();