var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello');
});

app.listen(3000, function () {
   console.log('app is working.. 127.0.0.1:3000');
});