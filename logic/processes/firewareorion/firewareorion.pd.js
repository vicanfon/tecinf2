const async = require('async');
const express = require('express');
const router = express.Router();

function main(req, res) {
    async.waterfall([function firewareorion(args, cbk) {
        cbk(null, {});
    },
    callEnablersFramework], function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result || 1);
        }
    });
}
function callEnablersFramework(args, cbk) {
    (function script(inputs, next) {
        var requestOptions = {
            method: 'get',
            url: 'http://reqhandler.vfos.uninova.pt/accessfunctionality/orion/2/gris/listEntities',
            params: {
                "vapp": "37f805f710547643b529f2ca797fab6e"
            }
        };
        require('request')(requestOptions, function(err, response) {
            if (response.statusCode != 200) {
                next(response.body || 'error');
            } else {
                next(null, JSON.parse(response.body));
            }
        });
    })(args, cbk)
}
module.exports = function(app) {
    router.get('/firewareorion', main);
    return router;
}