import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

import {Items} from '../api/items.js';

import Item from './Item.jsx';

class App extends Component {
    renderItems() {
        return this.props.items.map((item) => (
            <Item key={item._id} item={item}/>
        ));
    }

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
                    {this.renderItems()}
                </ul>

                <button className="select-random" onClick={this.selectRandom.bind(this)}>
                    Select random item
                </button>
            </div>
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
