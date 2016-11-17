var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');

var RestaurantForm = React.createClass({
  getRecommendations: function(event) {
    event.preventDefault();
    this.props.dispatch(actions.getZipAndKind(this.refs.zip.value, this.refs.kind.value));
  },
  render: function() {
      let results;

    return (
      <div className="RestaurantForm">
        <form onSubmit={this.getRecommendations} type="text">
          <input type="text" placeholder="Zip Code or City" ref="zip"/>
          <input type="text" placeholder="Food Type" ref="kind"/>
          <button id="button" type="submit">Get Results!</button>
        </form>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(RestaurantForm);

module.exports = Container;
module.exports.RestaurantForm = RestaurantForm;
