const express = require('express');
const app = express();
const config = require('./app-config');

const esRelUrl = '/' + config.es.index + '/' + config.es.type + '/_search';
const esBaseUrl = config.es.protocol + '://' + config.es.host + ':' + config.es.port;

app.listen(config.port, function () {
  console.log('listening on port ' + config.port);
});
app.use(express.static('dist'));

// proxy all search requests to ES
// TBD: to be removed once ES API enables CORS support
const request = require('request');
app.post(esRelUrl, function (req, res) {
  req.pipe(request({
    url: esBaseUrl + esRelUrl,
    qs: req.query,
    method: req.method
  }, function (error, response, body) {
  })).pipe(res);
});