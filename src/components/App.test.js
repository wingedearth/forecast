import React from 'react';
import Navigation from './Navigation';
import App from './App.jsx';
import { mount } from 'enzyme';

jest.mock('@/components/Navigation', () =>
	jest.fn().mockImplementation(() => <div data-hook="mock"></div>)
);

const mockData = {
	foo: 'bar'
};

describe('App', () => {
	it('renders the App component', () => {
		const wrapper = mount(
			<App data={mockData}>
				<div data-hook="test">test</div>
			</App>
		);
		const element = wrapper.find('main');

		expect(element).toHaveLength(1);
	});
	it('includes a Navigation component', () => {
		const wrapper = mount(
			<App data={mockData}>
				<div data-hook="test">test</div>
			</App>
		);

		const element = wrapper.find(Navigation);

		expect(element).toHaveLength(1);
	});
	it('renders children as passed in', () => {
		const wrapper = mount(
			<App data={mockData}>
				<div data-hook="test">test</div>
			</App>
		);

		const element = wrapper.find('[data-hook="test"]');

		expect(element).toHaveLength(1);
	});
});
