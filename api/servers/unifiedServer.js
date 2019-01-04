/**
 * Define the handling of the server
 */

//Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const router =  require('../routes');

//Api Definition
const unifiedServer = function(req, res) {
    let parsedUrl = url.parse(req.url, true);
    //Get the path
    let path = parsedUrl.pathname;
    let trimedPath = path.replace(/^\/+|\/$/g,'');

    // Get the query string as an object
    let queryStringObject = parsedUrl.query;

    // Get the HTTP Method
    let method = req.method.toLocaleLowerCase();

    //Getthe headers as an object
    let headers = req.headers;

    // Get the payload, if any
    let decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', function(data){
        buffer += decoder.write(data);
    });

    req.on('end', function() {
        buffer+= decoder.end();
        //Choose the handler this request should got to. if one is not found, use the not found handler
        let chosenHandler = router[trimedPath] || router.notFound;
        buffer = buffer && JSON.parse(buffer);
        
        //Construct the data object to send to the handler
        let data = {
            trimedPath,
            queryStringObject,
            method,
            headers,
            payload: buffer
        }

        //Route the request to the handler specified in the router
        chosenHandler(data, function(statusCode, payload) {
            //Use the status code called back by the handler, or default to 200
            statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
            //Use the payload called back by the handler, or default to {}
            payload = typeof(payload) == 'object' ? payload : {};

            //Convert the payload to string
            let payloadString = JSON.stringify(payload);

            console.log(`Returning this response with code: ${statusCode}`);
            //Return the response
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    });
}

//Export module
module.exports = unifiedServer;