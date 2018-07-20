/**
 *  router functionality for routing incoming requests
 */

const ParsedRequest = require('./request-parser').ParsedRequest;
const requestHandler = require('./request-handler');

var routes = {}

routes.hello = (parsedRequest, response) => {
    requestHandler.sayHello(parsedRequest, response);
}

var router = {};

router.route = (parsedRequest, response) => {

    let handler = typeof(routes[parsedRequest.path]) !== 'undefined' ? routes[parsedRequest.path] : null;
    if (handler != null) {
        handler(parsedRequest, response);
    } else {
        requestHandler.notFound(response);
    }
};

module.exports = router;