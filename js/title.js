var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');


var Title = React.createClass({
  render: function() {
    return (
      <div className="Title">
        <div className="container">
              <h2 id="titleHeader">Grub Finder!</h2>
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(Title);

module.exports = Container;
module.exports.Footer = Title;
