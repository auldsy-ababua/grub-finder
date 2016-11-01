//Create an index.js file containing a component called Game
"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var NewGameButton = require('./new-game-button');
var GuessForm = require('./guess-form');


var Game = React.createClass({
    render: function() {
        return (
          <div>
            <NewGameButton />
            <GuessForm />
          </div>
        );
    }
});

//Use ReactDOM.render to render the Game component into the <div>
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <Game />
        </Provider>,
        document.getElementById('app')
    );
});
