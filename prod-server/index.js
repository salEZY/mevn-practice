import express from 'express';
var app = express();
var port = 3000;
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.listen(port, function () {
  return console.log("Mevn app listening on port ".concat(port, "!"));
});