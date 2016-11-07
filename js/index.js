//Create an index.js file containing a component called Game
"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var HelloWorld = require('./hello-world');



var CapstoneApp = React.createClass({
    render: function() {
        return (
          <div>
            <HelloWorld />
          </div>
        );
    }
});

//Use ReactDOM.render to render the Game component into the <div>
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <CapstoneApp />
        </Provider>,
        document.getElementById('app')
    );
});
