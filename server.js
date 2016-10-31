"use strict"

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var jsonParser = bodyParser.json();


var app = express();




app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(jsonParser);

var fewestGuesses = null;

app.get('/fewest-guesses', jsonParser, function(req, res) {
    res.status(200).json({guessList:fewestGuesses});
    console.log("reading", fewestGuesses);
});


app.post('/fewest-guesses/:count', function(req, res) {
    if (!fewestGuesses || fewestGuesses > req.params.count) {
      fewestGuesses = req.params.count;
      console.log(fewestGuesses);
    }
    console.log("hello!");
    return res.status(200).json(fewestGuesses);
});

app.listen(8080);
exports.app = app;
