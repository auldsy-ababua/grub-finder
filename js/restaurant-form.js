var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');

var RestaurantForm = React.createClass({
  getRecommendations: function(event) {
    event.preventDefault();
    this.props.dispatch(actions.getZipAndKind(this.refs.zip.value, this.refs.kind.value));
    $('#button').click(
        function(){
            $('.Footer').css('position','inherit');
        });
  },
  render: function() {
      let results;

    return (
      <div className="RestaurantForm container">
        <form id="form" className="form-inline" onSubmit={this.getRecommendations} type="text">
          <div className="form-group">
            <input className="form-control" id="zipInput" type="text" placeholder="Zip Code or City" ref="zip" aria-describedby="basic-addon2"/>
            <input className="form-control" id="kindInput" type="text" placeholder="Food Type" ref="kind"/>
            <button id="button" className="btn btn-outline-secondary" type="submit">Get Results!</button>
          </div>
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
