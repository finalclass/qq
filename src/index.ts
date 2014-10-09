/// <reference path="typings/tsd.d.ts" />

import express = require('express');
import path = require('path');
import debug = require('debug');

var log:debug.ILogFunction = debug('qq');

var app:express.Application = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.listen(5900, ():void => {
  log('Listening on port ' + 5900);
});