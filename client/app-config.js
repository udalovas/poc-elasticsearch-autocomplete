var config = {};

config.host = 'localhost';
config.port = 3000;
config.protocol = 'http';

config.es = {};
config.es.port = 9200;
config.es.host = '35.189.79.182';
config.es.protocol = 'http';
config.es.index = 'productstest';
config.es.type = 'default';

module.exports = config;