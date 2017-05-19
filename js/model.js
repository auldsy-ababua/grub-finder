var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');
import SkyLight from 'react-skylight';


class Model extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    handleLoad() {
        var welcome_message = localStorage.getItem('welcome')
        if (welcome_message != 1) {

            this.refs.simpleDialog.show()

        }
    }

    _executeBeforeModalClose() {
         localStorage.setItem('welcome', 1)

    }

    render() {
        var myBigGreenDialog = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '40%',
      height: 'auto',
      left:'66%',
      top:'80%',
      marginTop: '-300px',
      marginLeft: '-35%',
    };

        
        return (
            <div >
                <SkyLight  dialogStyles={myBigGreenDialog} beforeClose={this._executeBeforeModalClose} title="GRUB FINDER"
                     ref="simpleDialog">
 "Welcome to grub finder, an exercise in utilizing Yelp's API. 
 To begin, simply use the form on this page to input your zip code as well as the type of food you'd like to eat around you. 
 For instance, you could input "Pizza" or "Sushi". Once complete, press enter and watch the results populate."
                 </SkyLight>
            </div>
        );
    }
}



var mapStateToProps = function (state, props) {
    return {
        error: state.error
    };
};

var Container = connect(mapStateToProps)(Model);

module.exports = Container;
module.exports.Model = Model;
