var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Viv in 2019!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example Hello world app listening at http://%s:%s', host, port);
});
