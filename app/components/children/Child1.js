// Include React
import React from "react"

// Create the Child3 Component
class Child1 extends React.Component {
    constructor(props) {
        super(props);
        // Here we set a generic state associated with the number of clicks on this component
        this.state = {
            food: 25
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
                    <h3 className="panel-title text-center">Mmm Mmm Good!</h3>
                </div>
                <div className="panel-body text-center">

                    <h3>Human Flesh</h3>
                    <img
                        alt="Scared Girls"
                        src="http://www.toxel.com/wp-content/uploads/2011/10/fear08.jpg"
                        width="100%"
                        onClick={this.handleClick.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Child1;
