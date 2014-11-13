'use strict';

var statik = require('statik');
// var server = statik('app');
statik({
  port: process.env.PORT || 5000,
  root: '/app'
});
