/*
Actions:
1. generate a random number
2. guess a number
3. Post guessed numbers
4. increment count for guesses
5. Alert number already guessed
6. Alert feedback
7. Reset game
*/

var GENERATE_RAND_NUM = 'GENERATE_RAND_NUM';
var generateRandNum = function(randomNum) {
    return {
        type: GENERATE_RAND_NUM,
        randomNum: randomNum
    }
};

var GUESS_NUM = 'GUESS_NUM';
var guessNum = function(userGuess) {
    return {
        type: GUESS_NUM,
        userGuess: userGuess
    };
};

var POST_GUESSED_NUMS = 'POST_GUESSED_NUMS';
var postGuessedNums = function(guessList) {
    return {
        type: POST_GUESSED_NUMS,
        guessList: guessList
    };
};

var INCREMENT_COUNT = 'INCREMENT_COUNT';
var incrementCount = function() {
    return {
        type: INCREMENT_COUNT
    };
};

var ALERT_ALREADY_GUESSED = 'ALERT_ALREADY_GUESSED';
var alertAlreadyGuessed = function() {
    return {
        type: ALERT_ALREADY_GUESSED
    };
};

var ALERT_FEEDBACK = 'ALERT_FEEDBACK';
var alertFeedback = function() {
    return {
        type: ALERT_FEEDBACK,
        feedback: feedback
    };
};

var RESET_GAME = 'RESET_GAME';
var resetGame = function() {
    return {
        type: RESET_GAME
    };
};

exports.GENERATE_RAND_NUM = GENERATE_RAND_NUM;
exports.generateRandNum = generateRandNum;
exports.GUESS_NUM = GUESS_NUM;
exports.guessNum = guessNum;
exports.POST_GUESSED_NUMS = POST_GUESSED_NUMS;
exports.postGuessedNums = postGuessedNums;
exports.INCREMENT_COUNT = INCREMENT_COUNT;
exports.incrementCount = incrementCount;
exports.ALERT_ALREADY_GUESSED = ALERT_ALREADY_GUESSED;
exports.alertAlreadyGuessed = alertAlreadyGuessed;
exports.ALERT_FEEDBACK  = ALERT_FEEDBACK ;
exports.alertFeedback = alertFeedback;
exports.RESET_GAME = RESET_GAME;
exports.resetGame = resetGame;
