var actions = require('./actions');

var initialState = {
  type: null,
  showMessage: false,
  zip: null,
  kind: null,
  recommendations: null
};

var capstoneApp = function (state,action) {
    var recommendations;
    var newState = Object.assign({}, state);
    if (action.type === 'BUTTON_PRESS') {
        newState.showMessage = !newState.showMessage;

    }

    else if (action.type === actions.GET_RECOMMENDATIONS_SUCCESS) {
       newState = Object.assign({}, state, {
           recommendations: action.recommendations,
           zip: action.zip,
           kind: action.kind
       });
       console.log(action.recommendations);
       return newState;
   }
   else if (action.type === actions.GET_RECOMMENDATIONS_ERROR) {

       newState = Object.assign({}, state, {
           error: actions.error
       });
       return newState;
   }

    return newState;
};


exports.capstoneApp = capstoneApp;
