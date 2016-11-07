var $ = require("jquery")

var BUTTON_PRESS = 'BUTTON_PRESS';
var buttonPress = function() {
    return {
        type: BUTTON_PRESS
    };
};

exports.BUTTON_PRESS = BUTTON_PRESS;
exports.buttonPress = buttonPress;
/*var GUESS_NUM = 'GUESS_NUM';
var guessNum = function(userGuess) {
    return {
        type: GUESS_NUM,
        userGuess: userGuess
    };
};

var RESET_GAME = 'RESET_GAME';
var resetGame = function() {
    return {
        type: RESET_GAME
    };
};

var FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
var fetchFewestGuessesSuccess = function(fewestGuesses) {
    return {
        type: FETCH_FEWEST_GUESSES_SUCCESS,
        fewestGuesses: fewestGuesses
    };
};

var FETCH_FEWEST_GUESSES_ERROR = 'FETCH_DESCRIPTION_ERROR';
var fetchFewestGuessesError = function(error) {
    return {
        type: FETCH_FEWEST_GUESSES_ERROR,
        error: error
    };
};

var POST_FEWEST_GUESSES_SUCCESS = 'POST_FEWEST_GUESSES_SUCCESS';
var postFewestGuessesSuccess = function(fewestGuesses) {
    return {
        type: POST_FEWEST_GUESSES_SUCCESS,
        fewestGuesses: fewestGuesses
    };
};

var POST_FEWEST_GUESSES_ERROR = 'POST_DESCRIPTION_ERROR';
var postFewestGuessesError = function(error) {
    return {
        type: POST_FEWEST_GUESSES_ERROR,
        error: error
    };
};

var fetchGuesses = function() {
    return function(dispatch) {
        var url = '/fewest-guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var guessList = data.guessList;
            return dispatch(
                fetchFewestGuessesSuccess(guessList)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchFewestGuessesError(error)
            );
        });
    };
};

var postGuesses = function(count) {
  return function(dispatch) {
    $.post("/fewest-guesses/" + count)
      .done(function(data){
        console.log(data);
        return dispatch(
            postFewestGuessesSuccess(data)

        );
      })
      .catch(function(error){
        return dispatch(
            postFewestGuessesError(error)
        );
      });
    };
};

exports.RESET_GAME = RESET_GAME;
exports.resetGame = resetGame;
exports.GUESS_NUM = GUESS_NUM;
exports.guessNum = guessNum;
exports.FETCH_FEWEST_GUESSES_SUCCESS = FETCH_FEWEST_GUESSES_SUCCESS;
exports.fetchFewestGuessesSuccess = fetchFewestGuessesSuccess;
exports.FETCH_FEWEST_GUESSES_ERROR = FETCH_FEWEST_GUESSES_ERROR;
exports.fetchFewestGuessesError = fetchFewestGuessesError;
exports.POST_FEWEST_GUESSES_SUCCESS = POST_FEWEST_GUESSES_SUCCESS;
exports.postFewestGuessesSuccess = postFewestGuessesSuccess;
exports.POST_FEWEST_GUESSES_ERROR = POST_FEWEST_GUESSES_ERROR;
exports.postFewestGuessesError = postFewestGuessesError;
exports.fetchGuesses = fetchGuesses;
exports.postGuesses = postGuesses;*/
