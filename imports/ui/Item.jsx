import React, {Component, PropTypes} from "react";
import {Items} from "../api/items.js";

export default class Item extends Component {
    render() {
        const itemClassName = this.props.item.selected ? 'selected' : '';

        return (
            <li className={itemClassName}>
                <button className="delete" onClick={this.deleteThisItem.bind(this)}>
                    &times;
                </button>

                <span className="text">{this.props.item.text}</span>
            </li>
        );
    }

    deleteThisItem() {
        Items.remove(this.props.item._id);
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
};