var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('listening at http:', host, port)
})
