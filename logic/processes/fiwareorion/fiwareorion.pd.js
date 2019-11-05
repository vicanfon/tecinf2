const async = require('async');
const express = require('express');
const router = express.Router();

function main(req, res) {}
module.exports = function(app) {
    router.get('/fiwareorion', main);
    return router;
}