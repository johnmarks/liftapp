'use strict';

var statik = require('statik');
var server = statik.createServer('app', {default: "index.html"});
server.listen();
