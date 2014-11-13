'use strict';

var statik = require('statik');
var server = statik('app', {default: 'index.html'});
server.listen();
