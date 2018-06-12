'use strict';
const signale = require('signale');

module.exports = {
    name: 'authorization',
    register: async function(server) {

        await server.register(require('hapi-auth-jwt2'));
       
        server.auth.strategy('jwt', 'jwt', {
              key: '3BE09269575E74AD9525B05655344E6CBEAE4C46DE92ABF06B85E5D58C9B177D',
              verifyOptions: { algorithms: ['HS256'] },
              validate: async (decoded) => {
                if (decoded) {
                    signale.info("Decoded", decoded);
                    return {isValid: true}
                } else {
                    return {isValid: false}
                }
              }
        });
    }
};