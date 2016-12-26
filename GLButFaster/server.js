'use strict';
var http = require('http');
var port = process.env.port || 1337;

var express = require('express');
var howler = require('howler');

var app = express();

var path = require('path');

// Set the paths
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/howler/dist/'));
app.use('/js', express.static(__dirname + '/node_modules/video.js/dist/'));

// Start the server, and use port 1337 (default value of Visual Studio.  I kept it, because I think it's cute)
app.listen(port);