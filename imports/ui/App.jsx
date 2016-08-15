import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import Main from "./Main.jsx";
import {Items} from "../api/items.js";

class App extends Component {
    render() {
        return (
            <Main items={this.props.items}/>
        );
    }
}

App.propTypes = {
    items: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        items: Items.find({}).fetch(),
    };
}, App);
