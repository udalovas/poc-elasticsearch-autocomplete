import autocomplete from 'autocomplete.js';
import elasticsearch from 'elasticsearch';
import doT from 'dot';
import $ from "jquery";
import config from "../../app-config.js";

import '../styles/autocomplete.css';

(function () {
    var productCardFn = doT.template($('#bestby-product-details-card-tmpl').text());
    var esClient = new elasticsearch.Client({
        host: {
            host: config.es.host,
            protocol: config.es.protocol,
            port: config.es.port
        }
    });
    autocomplete('#products', { hint: false }, [{
        source: function (query, callback) {
            esClient.search({
                index: config.es.index,
                type: config.es.type,
                body: { "query": { "match": { "name": query } } }
            }).then(function (body) {
                callback(body.hits.hits);
            }, function (error) {
                callback([]);
            });
        },
        displayKey: 'name',
        templates: {
            suggestion: function (suggestion, answer) {
                return suggestion._source.name;
            }
        }
    }]).on('autocomplete:selected', function (event, suggestion, dataset) {
        $('#product-details-container').html(productCardFn(suggestion._source));
    });
})();

