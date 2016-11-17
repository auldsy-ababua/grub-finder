var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');

var Recommendations = React.createClass({
  render: function() {
    <div id="bizData">
      <div id='nameList'>{this.props.recommendation.name}</div>
      <div id='phoneList'>{this.props.recommendation.phone}</div>
      <div id='ratingList'>{this.props.recommendation.rating}</div>
    </div>
  }
});
var mapStateToProps = function(state, props) {
    return {
        recommendations: state.recommendations
    };
};

var Container = connect(mapStateToProps)(Recommendations);

module.exports = Container;
module.exports.Recommendations = Recommendations;
