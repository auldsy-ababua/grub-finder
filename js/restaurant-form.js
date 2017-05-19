var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');
var Loader = require('halogen/ScaleLoader');

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false,showempty:true };

    this.handleLoad = this.handleLoad.bind(this);
    this.getRecommendations = this.getRecommendations.bind(this);

  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.setState({  show: false,showempty:true });

  }
  getRecommendations(event) {


    event.preventDefault();
    this.setState({ show: true });

    let show
    this.props.dispatch(actions.getZipAndKind(this.refs.zip.value, this.refs.kind.value)).then(function (response) {
      console.log("responsev", response.type)


    })

    setTimeout(() => {
      this.setState({ show: false ,showempty:false});
    }, 2000);

  }

  render() {
    var renderInput;
    if (this.state.show == true) {
      renderInput = (<Loader color="#26A65B" size="10px" margin="4px" />);



    } else {
      renderInput = (<span></span>);
    }
    var shown = {
      display: this.state.showempty ? "block" : "none"
    };

    let results;

    return (


      <div className="RestaurantForm container">
        <form id="form" className="form-inline" onSubmit={this.getRecommendations} type="text">
          <div className="form-group">
            <input className="form-control" id="zipInput" type="text" placeholder="Zip Code or City" ref="zip" aria-describedby="basic-addon2" />
            <input className="form-control" id="kindInput" type="text" placeholder="Food Type" ref="kind" />
            <button id="button" className="btn btn-outline-secondary" type="submit">Get Results!</button>
          </div>
        </form>
        <div>
          {renderInput}

          <h2 style={shown} className="mainHeading">


            Would you look at that? 
            There’s nothing here! I bet if you fill out the form above,
             there will be all sorts of great restaurants to choose from.
          </h2>
        </div>





      </div>
    );
  }
};

var mapStateToProps = function (state, props) {
  return {
    error: state.error
  };
};

var Container = connect(mapStateToProps)(RestaurantForm);

module.exports = Container;
module.exports.RestaurantForm = RestaurantForm;
