/**
 *  request handler defines handlers for possible routes
 */

const ParsedRequest = require('./request-parser').ParsedRequest;

var requestHandlers = {};

requestHandlers.sayHello = (parsedRequest, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.end(JSON.stringify({ 'message': 'welcome to the master class party son !' }))
}

requestHandlers.notFound = (response) => {
    response.statusCode = 404;
    response.end('404 - Not Found');
}

module.exports = requestHandlers;

