/// <reference path="typings/tsd.d.ts" />
var express = require('express');
var path = require('path');
var debug = require('debug');

var log = debug('qq');

var app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.listen(5900, function () {
    log('Listening on port ' + 5900);
});
//# sourceMappingURL=index.js.map
