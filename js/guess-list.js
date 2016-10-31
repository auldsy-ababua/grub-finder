var React = require('react');
var connect = require('react-redux').connect;

var actions = require('./actions');

var GuessList = React.createClass({
  render: function() {
    return (
      <div className="list">
        <div id="guessList">
          <h3>{this.props.guessList.toString()}</h3>
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        guessList: state.guessList
    };
};
module.exports = connect(mapStateToProps)(GuessList);
