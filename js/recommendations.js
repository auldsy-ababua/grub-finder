var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');


 class Recommendations extends React.Component {

  truncate () {
      let string = this.props.item.name;
      let length = 24;
      return string.length > length ?
      string.substring(0, length - 3) + "..." :
      string
  }

  render() {

    let restaurantName = this.truncate();
    console.log ('restaurantName');
 
    return (



      <div className="card col-md-4">
         <div className="card-block">
          <h5 className="card-title">{restaurantName}</h5>
        </div>
        <img className="img" src={this.props.item.image_url} alt="Card image"/>
        <div className="card-block">
          <p className="card-text">This Restaurant has a {this.props.item.rating} star rating. You can call this business at {this.props.item.phone}.</p>
          <a href={this.props.item.url} className="card-link">Yelp Page</a>
        </div>
      </div>


    )
  }
};
var mapStateToProps = function(state, props) {
    return {
        recommendations: state.recommendations
    };
};

var Container = connect(mapStateToProps)(Recommendations);

module.exports = Container;
module.exports.Recommendations = Recommendations;
