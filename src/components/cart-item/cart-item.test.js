// Libraries....
import React from 'react';
import { shallow } from 'enzyme';
import CartItem from '../index';


const render = () =>
	shallow(<CartItem />);


describe('<CartItem />', () => {
	it('exists', () => {
		expect(render().exists()).toBe(true);
    })
})