var actions = require('./actions');

var initialRepositoryState = {
  type: null,
  randomNum: null,
  userGuess: null,
  guessList: [],
  count: 0,
  feedback: ""
};

var winner = function(){
    userFeedback = 'You Won. Click new game to play again';
};

var repositoryReducer = function(state, action) {
    state = state || initialRepositoryState;

    if (action.type === actions.RESET_GAME) {
        return initialRepositoryState;
    }
    else if (action.type === actions.GENERATE_RAND_NUM) {
        var generateNumber = function() {
            secretNumber = Math.floor(Math.random() * 100) + 1;
            return secretNumber;
        };
        state.randomNum = generateNumber;
        return state;
    }
    else if (action.type === actions.GUESS_NUM) {
      state.userGuess = action.userGuess;
      return state;
      if ($.inArray(state.userGuess, guessList) != -1) {
        //call actions.ALERT_ALREADY_GUESSED;
      }
      else {
        //call actions.ALERT_FEEDBACK;
        //call actions.INCREMENT_COUNT;
        //call actions.POST_GUESSED_NUMS
      }
    }
    else if (action.type === actions.POST_GUESSED_NUMS) {
        state.guessList.push(action.userGuess);
        return state;
    }
    else if (action.type === actions.INCREMENT_COUNT) {
        state.count = state.guessList.length;
        return state;
    }
    else if (action.type === actions.ALERT_ALREADY_GUESSED) {
        state.feedback = "You've already guessed that!";
        return state;
    }
    else if (action.type === actions.ALERT_FEEDBACK) {
        if(state.userGuess == state.randomNum){
            state.feedback = 'You Won. play again!';
        } else if(Math.abs(state.randomNum - state.userGuess) < 10){
            state.feedback = 'hot';
        } else if(Math.abs(state.randomNum - usestate.userGuessrGuess) < 20 && Math.abs(state.randomNum - state.userGuess) > 9){
            state.feedback = ' Kinda hot';
        } else if(Math.abs(state.randomNum - state.userGuess) < 30 && Math.abs(state.randomNum - state.userGuess) > 19){
            state.feedback = 'less than warm';
        } else {
            state.feedback = 'cold';
        }
        return state;
    }

    return state;
};

exports.repositoryReducer = repositoryReducer;
