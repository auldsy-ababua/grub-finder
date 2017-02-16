var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');


var Footer = React.createClass({
  render: function() {
    return (
      <div className="Footer">
        <h2 id="footerHeader" className="fancy">CONTACT THE DEVELOPER!</h2>
        <div id="social-media-outer">
          <div>
            <ul className="row" id="horizontal-list">
              <li className="col-md-3">
                <a href="mailto:caulds989@gmail.com?Subject=Just%20viewed%20your%20portfolio">
                    <img className="icon" src="images/email.png"/>
                </a>
              </li>
              <li className="col-md-3">
                <a href="https://github.com/auldsy-ababua" target="_blank">
                    <img className="icon" src="images/github.png"/>
                </a>
              </li>
              <li className="col-md-3">
                <a href="https://plus.google.com/u/0/101893123188561927210/posts" target="_blank">
                    <img className="icon" src="images/gplus.png"/>
                </a>
              </li>
              <li className="col-md-3">
                <a href="skype:caulds989?call">
                    <img className="icon" src="images/skype.png"/>
                </a>
              </li>
            </ul>
          </div>
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

var Container = connect(mapStateToProps)(Footer);

module.exports = Container;
module.exports.Footer = Footer;
