"use strict"

var express = require('express');
var unirest = require('unirest');
var bodyParser = require('body-parser');
var path = require('path');
var jsonParser = bodyParser.json();


/*var app = express();




app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(jsonParser);

unirest.get('https://api.yelp.com/v2/search?term='+kind+'&location='+zip
, jsonParser, function(req, res) {
    res.status(200).json({recommendations:fewestGuesses});
    console.log("reading", fewestGuesses);
});


app.post('/fewest-guesses/:count', function(req, res) {
    if (!fewestGuesses) {
      fewestGuesses = req.params.count;
    } else if (fewestGuesses > req.params.count) {
      fewestGuesses = req.params.count;
      console.log(fewestGuesses);
    }
    console.log("hello!");
    return res.status(200).json(fewestGuesses);
});

app.listen(8080);
exports.app = app;
*/
