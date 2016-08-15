import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {createContainer} from "meteor/react-meteor-data";
import {Items} from "../api/items.js";
import ItemsList from "./ItemsList.jsx";
import {_} from 'underscore';

export default class Main extends Component {
    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Items.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    selectRandom(event) {
        event.preventDefault();

        Meteor.call('randomlySelectItem');
    }

    resetSelection(event) {
        event.preventDefault();

        Meteor.call('resetSelection');
    }

    generateButton(items) {
        var areSelected = (item) => {
            return item.selected
        };

        if (_.any(items, areSelected)) {
            return (
                <button id="reset" onClick={this.resetSelection.bind(this)}>
                    Reset
                </button>
            )
        } else {
            return (
                <button id="select-random" onClick={this.selectRandom.bind(this)}>
                    Select random item
                </button>

            )
        }
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Possible items</h1>
                </header>

                <form className="new-item" onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        ref="textInput"
                        placeholder="Type to add new items"
                    />
                </form>

                <ul>
                    <ItemsList itemsList={this.props.items}/>
                </ul>

                {this.generateButton(this.props.items)}

            </div>
        );
    }
}

Main.propTypes = {
    items: PropTypes.array.isRequired,
};

