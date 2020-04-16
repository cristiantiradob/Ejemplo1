var express = require('express');
var app = express();

var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function() {
  console.log('Aplicación ejemplo, escuchando el puerto ' + port);
});