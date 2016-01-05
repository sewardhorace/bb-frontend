
var express = require('express');
var app = express();
var path = __dirname+'/public/';

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path+'index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
