"use strict";
var express = require("express");
var request = require("request");
var Routes = (function () {
    function Routes() {
    }
    Routes.prototype.config = function () {
        var router = express.Router();
        this.configFish(router);
        return router;
    };
    Routes.prototype.configFish = function (router) {
        router.get("/get/config-fish/", this.configFishHandler);
    };
    Routes.prototype.configFishHandler = function (req, res) {
        var url = "https://gist.githubusercontent.com/nicoandresr/7171f107b6d3bfa0d23ccf514dd3869d/raw/8430b4667e34c52267d380708ea6ab461dab8dfa/.config.fish";
        var options = Routes.getRequestOptions(url);
        request(options, function (err, response, body) {
            if (err || response.statusCode !== 200) {
                res.status(response.statusCode).send(response.statusMessage);
                return;
            }
            res.send(body);
        });
    };
    Routes.getRequestOptions = function (url) {
        return {
            url: url
        };
    };
    return Routes;
}());
exports.Routes = Routes;
