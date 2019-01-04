/**
 * Define the creation of the servers. If we set up another server
 * with different capabilities we should do it here.
 */

 //Dependencies
const http = require('http');
const https = require('https');
const fs = require('fs');
const unifiedServer = require('./unifiedServer');

//HTTP Server
const httpServer =  http.createServer(function(req, res) {
    unifiedServer(req, res);
});

//HTTPS Options
let httpsServerOptions = {
    key: fs.readFileSync(`${__dirname}/secure/key.pem`),
    cert: fs.readFileSync(`${__dirname}/secure/cert.pem`)
};

//HTTPS Server
const httpsServer = https.createServer(httpsServerOptions, function(req, res){
    unifiedServer(req, res);
});

//Export module
module.exports = {
    httpServer,
    httpsServer
}