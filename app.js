var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello world');
});

// returns name property
app.post('/', function (req, res) {
  res.send(req.body.name);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
