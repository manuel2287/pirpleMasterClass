/**
 * Defines and put in action all servers we need
 */

//Dependencies
const { httpServer, httpsServer} = require('./servers');
const config = require('./configs');

//Setting up HTTP Server on http config port
httpServer.listen(config.httpPort, function(){
    console.log(`HTTP server initialized in ${config.envName} mode`);
    console.log(`The HTTP server is listening on port ${config.httpPort} now`);
});

//Setting up HTTPS Server on https config port
httpsServer.listen(config.httpsPort, function(){
    console.log(`HTTPS Server initialized in ${config.envName} mode`);
    console.log(`The HTTPS Server is listening on port ${config.httpsPort} now`);
});