'use strict';

var statik = require('statik');
var server = statik('app');
server.listen({
  port: process.env.PORT || 5000,
  root: '/app'
});
