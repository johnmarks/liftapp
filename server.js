'use strict';

var statik = require('statik');
var server = statik('app');
server.listen(process.env.PORT || 5000);
