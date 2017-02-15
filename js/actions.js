var $ = require("jquery");
var fetch = require('isomorphic-fetch');
import OAuthSimple from 'oauthsimple';

var consumerKey = '2ycjVcXfdZOJ1WLCzf19iQ';
var consumerSecret = 'gpLvAC71QtQJVbxK-Eq_yXykkqg';
var token = '8uu9MvVHdkv-TE3Im88DXsrRMzzvk2kB';
var tokenSecret = 'lmLosFTHQ5lK1qmGZnn6px6nv64';

var BUTTON_PRESS = 'BUTTON_PRESS';
var buttonPress = function() {
    return {
        type: BUTTON_PRESS
    };
};

exports.BUTTON_PRESS = BUTTON_PRESS;
exports.buttonPress = buttonPress;

var GET_RECOMMENDATIONS_SUCCESS = 'GET_RECOMMENDATIONS_SUCCESS';
var getRecommendationsSuccess = function(recommendations) {
    return {
        type: GET_RECOMMENDATIONS_SUCCESS,
        recommendations: recommendations
    };
};

exports.GET_RECOMMENDATIONS_SUCCESS = GET_RECOMMENDATIONS_SUCCESS;
exports.getRecommendationsSuccess = getRecommendationsSuccess;

var GET_RECOMMENDATIONS_ERROR = 'GET_RECOMMENDATIONS_ERROR';
var getRecommendationsError = function(error) {
    return {
        type: GET_RECOMMENDATIONS_ERROR,
        error: error
    };
};

exports.GET_RECOMMENDATIONS_ERROR = GET_RECOMMENDATIONS_ERROR;
exports.getRecommendationsError = getRecommendationsError;

var getZipAndKind = function(zip, kind) {
    return function(dispatch) {
        var prodURL = "https://grub-finder.herokuapp.com/"
        //var devURL = "http://localhost:8080/recommendations/";
        return fetch(prodURL + zip + "/" + kind, {
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
            return dispatch (
                getRecommendationsSuccess(data.businesses, zip, kind)
            );
        })
        .catch(function(error) {
            return dispatch(
                getRecommendationsError(error)
            );
        });
    };
};

exports.getZipAndKind = getZipAndKind;
