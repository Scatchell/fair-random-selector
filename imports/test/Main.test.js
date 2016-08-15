import React from 'react';
import {shallow} from 'enzyme';
import {chai} from 'meteor/practicalmeteor:chai';
import Main from '../ui/Main.jsx';


describe('Main', () => {
    it('should render select random button when no items selected', () => {
        const items = [
            {selected: false, text: 'test item name1'},
            {selected: false, text: 'test item name2'},
            {selected: false, text: 'test item name3'}
        ];
        const renderedApp = shallow(<Main items={items}/>);
        chai.assert.equal(renderedApp.find('#select-random').length, 1);
    });

    it('should render reset button when one item is selected', () => {
        const items = [
            {selected: false, text: 'test item name1'},
            {selected: true, text: 'test item name2'},
            {selected: false, text: 'test item name3'}
        ];
        const renderedApp = shallow(<Main items={items}/>);
        chai.assert.equal(renderedApp.find('#reset').length, 1);
    });
});