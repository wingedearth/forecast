import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('Home', () => {
	it('renders a dashboard', () => {
		const wrapper = shallow(<Home />);
		const element = wrapper.find('[data-hook="home"]');

		expect(element).toHaveLength(1);
	});
});
