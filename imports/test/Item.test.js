// import { Factory } from 'meteor/factory';
import React from "react";
import {shallow} from "enzyme";
import {chai} from "meteor/practicalmeteor:chai";
import Item from "../ui/Item.jsx";


describe('Item', () => {
    it('should render an item with its text', () => {
        const item = {selected: false, text: 'test item name'};
        const renderedItem = shallow(<Item item={item} />);
        chai.assert.equal(renderedItem.find('.text').prop('children'), 'test item name');
    });
});
