'use strict';

var statik = require('statik');
var server = statik.createServer('.', {default: "app/index.html"});
server.listen();
