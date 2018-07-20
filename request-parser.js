/**
 *  request parser
 */

const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

class RequestParser {

    constructor(request) {
        this.request = request;
    }

    parseRequest() {
        let promise = new Promise((resolve, reject) => {
            // get method
            let method = this.request.method.toLowerCase();
            
            // get path
            let parsedUrl = url.parse(this.request.url, true);
            let path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
            
            // get query
            let query = parsedUrl.query;
            
            // get headers
            let headers = this.request.headers;

            // get payload
            let decoder = new StringDecoder('utf-8');
            var buffer = '';

            this.request.on('data', (data) => {
                buffer += decoder.write(data);
            });

            this.request.on('end', () => {
                buffer += decoder.end();
                let payload = buffer;
                let parsedRequest = new ParsedRequest(method, path, query, headers, payload);
                resolve(parsedRequest);
            });
        });
        return promise;
    }

}

class ParsedRequest {

    constructor (method, path, query, headers, payload) {
        this.method = method;
        this.path = path;
        this.query = query;
        this.headers = headers;
        this.payload = payload;
    }

}

module.exports.RequestParser = RequestParser;
module.exports.ParsedRequest = ParsedRequest;
