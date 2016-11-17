"use strict"

var express = require('express');
var unirest = require('unirest');
var bodyParser = require('body-parser');
var path = require('path');
var jsonParser = bodyParser.json();
var passport = require ("passport");
var fetch = require('isomorphic-fetch');
var OAuthSimple = require('oauthsimple');
var consumerKey = '2ycjVcXfdZOJ1WLCzf19iQ';
var consumerSecret = 'gpLvAC71QtQJVbxK-Eq_yXykkqg';
var token = '8uu9MvVHdkv-TE3Im88DXsrRMzzvk2kB';
var tokenSecret = 'lmLosFTHQ5lK1qmGZnn6px6nv64';

var app = express();




app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(jsonParser);


app.get('/recommendations/:zip/:kind', jsonParser, function(req, res) {
    var oauth = new OAuthSimple(consumerKey, tokenSecret);

    var request = oauth.sign({
        action: "GET",
        path: "https://api.yelp.com/v2/search",
        parameters: "term=" + req.params.kind + '&location=' + req.params.zip,
        signatures: {
            api_key: consumerKey,
            shared_secret: consumerSecret,
            access_token: token,
            access_secret: tokenSecret
        }
    });
    fetch(request.signed_url, {
            mode: "no-cors",
            method: "GET"
        })
        .then(function(response) {

            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                //throw error;
            }
            return response;
        })
        .then(function(response) {

            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            console.log(data);
            return res.json(data);
        })
        .catch(function(error) {
            return res.json(error);
        });
});



app.listen(8080);
exports.app = app;
