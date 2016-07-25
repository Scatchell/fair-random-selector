import React, {Component, PropTypes} from 'react';
import {Items} from '../api/items.js';

// Item component - represents a single todo item
export default class Item extends Component {
    render() {
        const itemClassName = this.props.item.selected ? 'selected' : '';

        return (
            <li className={itemClassName}>
                <button className="delete" onClick={this.deleteThisTask.bind(this)}>
                    &times;
                </button>

                <span className="text" onClick={this.toggleSelected.bind(this)}>{this.props.item.text}</span>
            </li>
        );
    }

    toggleSelected() {
        // Set the checked property to the opposite of its current value
        Items.update(this.props.item._id, {
            $set: { selected: !this.props.item.selected },
        });
    }

    deleteThisTask() {
        Items.remove(this.props.item._id);
    }
}

Item.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    item: PropTypes.object.isRequired,
};