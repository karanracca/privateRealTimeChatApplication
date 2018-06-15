'use strict'

//TODO - Create a constants file to store all URL (mongo)
//TODO - Hash user password in mongoose model

const Glue = require('glue');
const manifest = require('./config/manifest');
const signale = require('signale');

const startServer = async function () {
    try {
        const server = await Glue.compose(manifest, { relativeTo: __dirname });
        await server.start();
        signale.complete(`Server is listening on ${server.info.uri.toLowerCase()}`);
    }
    catch (err) {
        signale.error(err);
    }
};

startServer();