
var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = __dirname+'/public/';

var app = express();

app.use(sassMiddleware({
    src: __dirname+'/public/styles/',
    outputStyle: 'compressed',
    prefix: '/static/styles/'
}));
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path+'index.html');
});

var server = app.listen(3030, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
