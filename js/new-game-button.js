var React = require('react');
var connect = require('react-redux').connect;

var actions = require('./actions');

var NewGameButton = React.createClass({
  newGame: function() {
    this.props.dispatch(actions.resetGame());
  },
  render: function() {
    return (
      <div className="newGameButton">
        <button type="submit" onClick={this.newGame}>Play Again!</button>
      </div>
    );
  }
});

var Container = connect()(NewGameButton);

module.exports = Container;
