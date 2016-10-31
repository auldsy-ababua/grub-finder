var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');

var GuessForm = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(
      actions.fetchGuesses()
    );
  },
  generateForm: function(event) {
    event.preventDefault();
    this.props.dispatch(
      actions.guessNum(this.refs.guessNum.value)
    );
    if (store.getState().feedback == 'You Won. Play again!') {
      this.props.dispatch (
        actions.postGuesses(store.getState().count)
      );
    }
  },
  render: function() {
    return (
      <div className="guessForm">
      <div id="fewestGuess">
        <h3>You&#39;ve solved this puzzle in {this.props.fewestGuesses} guesses</h3>
      </div>
        <form onSubmit={this.generateForm}>
          <input type="number" ref="guessNum"/>
          <button type="submit">Enter!</button>
        </form>
        <div id="feedback">
          <h3>Your Last Guess was: {this.props.feedback}</h3>
        </div>
        <div id="guessList">
          <h3>You have guessed:</h3>
          <h3>{this.props.guessList.toString()}</h3>
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        feedback: state.feedback,
        guessList: state.guessList
    };
};
var Container = connect(mapStateToProps)(GuessForm);

module.exports = Container;
