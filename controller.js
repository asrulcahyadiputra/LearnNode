"use strict";


var response = require('./rest');
var connection = require('./connection');


exports.index = function(req, res) {
    response.ok = ('Rest Application Successfully !')
}