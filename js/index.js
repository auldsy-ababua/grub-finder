//Create an index.js file containing a component called Game
"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var RestaurantForm = require('./restaurant-form');
var DisplayRecs = require('./display-recs');
var Footer = require('./footer');
var Title = require('./title');

var CapstoneApp = React.createClass({
    render: function() {
        return (
          <div>
            <Title />
            <RestaurantForm />
            <DisplayRecs />
            <Footer />
          </div>
        );
    }
});

$('#button').click(
    function(){
        $('.Footer').css('position','inherit');
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
