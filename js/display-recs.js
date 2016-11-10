var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');

var DisplayRecs = React.createClass({
  render: function() {
    console.log(this.props.recommendations);
    return (
      <div className="DisplayRecs">
        <div id="recommendationList">
          <h1>{this.props.recommendations}</h1>
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        recommendations: state.recommendations
    };
};

var Container = connect(mapStateToProps)(DisplayRecs);

module.exports = Container;
module.exports.DisplayRecs = DisplayRecs;
