// require dependencies
const config = require('./config');
const http = require('http');
const https = require('https');
const fs = require('fs');
const RequestParser = require('./request-parser').RequestParser;
const ParsedRequest = require('./request-parser').ParsedRequest;
const router = require('./router');

let createServers = () => {
    // create http server
    let httpServer = http.createServer((req, res) => {
        unifiedServer(req, res);
    });

    // create https server
    const httpsOpts = {
        key : fs.readFileSync('./https/key.pem'),
        cert : fs.readFileSync('./https/cert.pem')
    }
    let httpsServer = https.createServer(httpsOpts, (req, res) => {
        unifiedServer(req, res);
    });

    // start listening on http
    httpServer.listen(config.httpPort, () => {
        console.log(`http server live and listening @ port ${config.httpPort}`);
    });

    // start listening on https
    httpsServer.listen(config.httpsPort, () => {
        console.log(`https server live and listening @ port ${config.httpsPort}`);
    });
};

let unifiedServer = (req, res) => {

    let requestParser = new RequestParser(req);
    requestParser.parseRequest()
    .then((parsedRequest) => {
        router.route(parsedRequest, res);
    });
}

createServers();