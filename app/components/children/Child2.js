// Include React
import React from "react"

// Create the Child3 Component
class Child2 extends React.Component {
    constructor(props) {
        super(props);
        // Here we set a generic state associated with the number of clicks on this component
        this.state = {
            food: 12
        };
    }

    // Whenever the button is clicked we'll run the this.props.feedSeymour function, passing in
    // this.state.food as an argument. (6 in this case)
    handleClick() {
        this.props.feedSeymour(this.state.food);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Tasty Treats</h3>
                </div>
                <div className="panel-body text-center">
                    <h3>Frog Livers</h3>
                    <img
                        alt="Frog"
                        src="http://www.cellphonetaskforce.org/wp-content/uploads/2012/01/frog-left.jpg"
                        width="100%"
                        onClick={this.handleClick.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Child2;
