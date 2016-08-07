import React, {Component, PropTypes} from "react";
import Item from "./Item.jsx";
// import {Items} from '../api/items.js';

export default class ItemsList extends Component {
    renderItems(itemsList) {
        return itemsList.map((item) => (
            <Item key={item._id} item={item}/>
        ));
    }

    render() {
        const itemsList = this.props.itemsList;

        return (
            <div>
                {this.renderItems(itemsList)}
            </div>
        );
    }
}

ItemsList.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    itemsList: PropTypes.array.isRequired,
};