'use strict';

var express = require('express'),
    path = require('path'),
    app = express(),
    logger = require('morgan'),
    compress = require('compression');

app.use(express.static(path.join(__dirname, '/')));
app.use(logger('default'));
app.use(compress({ level: 9, memLevel: 9 }));

app.get('/', function(req, res) {
	res.sendfile('index.html');
});


app.listen(3000, function(){
});