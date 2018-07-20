/**
 *  server configuration is defined in this file
 * 
 *  you can pass a custom parameter when firing up the server:
 *  @param ENV_NAME
 *  example : > ENV_NAME=staging node app.js
 * 
 *  note: defaults to staging environment if parameter not passed
*/

const environments = {

    staging : {
        httpPort : 3000,
        httpsPort : 3001,
        envName : 'staging'
    },

    production : {
        httpPort : 6000,
        httpsPort : 6001,
        envName: 'production'
    }

};

let envName = (process.env.ENV_NAME || '').toLowerCase();

let environment = (typeof(environments[envName]) !== 'undefined') ? environments[envName] : environments.staging;

console.log(`environment is set to ${environment.envName}`);

module.exports = environment;