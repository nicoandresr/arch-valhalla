"use strict";
var express = require("express");
var cors = require("cors");
var routes_1 = require("./routes");
var Server = (function () {
    function Server(_port) {
        this._port = _port;
        this.setupServer();
        //this.enableCors();
        this.runServer();
    }
    Server.prototype.setupServer = function () {
        this._app = express();
        this._app.get("/", function (req, res) { return res.sendFile(__dirname + "/README.md"); });
        var routes = new routes_1.Routes().config();
        this._app.use("/", routes);
    };
    Server.prototype.enableCors = function () {
        var options = { origin: "*" };
        this._app.use(cors(options));
    };
    Server.prototype.runServer = function () {
        var _this = this;
        this._app.listen(this._port, function () {
            console.log("Listen on port: " + _this._port);
        });
    };
    return Server;
}());
new Server(process.env.PORT || 5001);
