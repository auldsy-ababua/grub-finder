var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');


var Footer = React.createClass({
  render: function() {
    return (
      <div className="Footer">
              
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(Footer);

module.exports = Container;
module.exports.Footer = Footer;
