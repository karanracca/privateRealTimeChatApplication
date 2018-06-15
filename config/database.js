'use strict';
const mongoose = require('mongoose');
const signale = require('signale');

module.exports = {
    name: 'mongoose-connector',
    register: async function(server, options) {
        
        mongoose.connect('mongodb://localhost/chat');

        mongoose.connection.on('error', console.error.bind(console, 'Cannot be connected to MongoDB'));
        
        mongoose.connection.once('open', function() {
            signale.complete('Connected to MongoDB');
        });
    }
};