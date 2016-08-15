import {Meteor} from 'meteor/meteor';
import {Items} from '../imports/api/items.js';
import {_} from 'underscore';

Meteor.startup(() => {
    Meteor.methods({
        randomlySelectItem: function () {
            var items = Items.find({}).fetch();

            var choice = items[Math.floor(Math.random() * items.length)];

            Items.update(choice._id, {
                $set: {selected: true},
            });

            var unselectedItems = _.without(items, choice);

            unselectedItems.forEach(function (item) {
                Items.update(item._id, {
                    $set: {selected: false},
                });
            });
        },
        resetSelection: function () {
            var items = Items.find({}).fetch();

            items.forEach(function (item) {
                Items.update(item._id, {
                    $set: {selected: false},
                });
            });
        }
    });
});
