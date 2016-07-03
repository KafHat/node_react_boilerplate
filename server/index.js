var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/../dist/js'));

app.get('/', function (req, res) {
   res.render('index');
});

app.listen(3000, function () {
   console.log('app is working.. 127.0.0.1:3000');
});