var actions = require('./actions');

var generateNumber = function() {
    var secretNumber = Math.floor(Math.random() * 100) + 1;
    return secretNumber;
};

var initialRepositoryState = {
  type: null,
  randomNum: generateNumber(),
  userGuess: null,
  guessList: [],
  fewestGuesses: null,
  count: 0,
  feedback: ""
};

var winner = function(){
    userFeedback = 'You Won. Click new game to play again';
};

var repositoryReducer = function(state, action) {
    state = state || initialRepositoryState;


    if (action.type === actions.RESET_GAME) {
        var leastGuesses = state.fewestGuesses;
        state = initialRepositoryState;
        var randNum = generateNumber();
        state = Object.assign({}, state, {
          randomNum: randNum
        });
        console.log(state);
        return state;
    }
    else if (action.type === actions.GUESS_NUM) {
      state.userGuess = action.userGuess;
      var count = state.guessList.length;
      var filterGuess = state.guessList.filter(function(value){
        return value == state.userGuess;
      });
      if (filterGuess.length > 0) {
        state.feedback = "You've already guessed that!";
      }
      else {
        state.guessList.push(" " + action.userGuess);
        count = state.guessList.length;
        if(state.userGuess == state.randomNum){
            state.feedback = 'You Won. Play again!';
            actions.postGuesses(count);
        } else if(Math.abs(state.randomNum - state.userGuess) < 10){
            state.feedback = 'Hot';
        } else if(Math.abs(state.randomNum - state.userGuess) < 20 && Math.abs(state.randomNum - state.userGuess) > 9){
            state.feedback = 'Kinda hot';
        } else if(Math.abs(state.randomNum - state.userGuess) < 30 && Math.abs(state.randomNum - state.userGuess) > 19){
            state.feedback = 'Less than warm';
        } else {
            state.feedback = 'Cold';
        }

        console.log(count);
      }

      return Object.assign({}, state, {
        count: count
      });

    }

    else if (action.type === actions.FETCH_FEWEST_GUESSES_SUCCESS) {
            var newState = Object.assign({}, state, {
                fewestGuesses: action.fewestGuesses
            });
            return newState;
        }

    else if (action.type === actions.FETCH_FEWEST_GUESSES_ERROR && state.guessList.length > 0) {
            return Object.assign({}, state, {
                feedback: "Internal server error"
            });
        }
    console.log(state);
    return state;
};

exports.repositoryReducer = repositoryReducer;
