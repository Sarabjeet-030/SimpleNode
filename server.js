var express = require('express');
var app = express();
var process = require('process');

var port = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.send('Working');
})

app.listen(port);