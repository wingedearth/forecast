import React from 'react';
import { mount } from 'enzyme';
import TextBanner from './TextBanner';

describe('TextBanner', () => {
	beforeEach(() => {
		jest.spyOn(console, 'error').mockImplementation(() => {});
	});
	afterAll(() => {
		jest.clearAllMocks();
	});
	it('renders a text banner if a text string prop is passed in', () => {
		const text = 'foo';
		const wrapper = mount(<TextBanner text={text} />);

		const element = wrapper.find('[data-hook="text-banner"]');
		const innerElement = wrapper.find('[data-hook="text-banner-text"]');

		expect(element).toHaveLength(1);
		expect(innerElement.text()).toBe(text);
	});
	it('does not render if a text prop is not passed in', () => {
		const wrapper = mount(<TextBanner />);

		const element = wrapper.find('[data-hook="text-banner"]');

		expect(element).toHaveLength(0);
	});
	it('does not render if a non-string text prop is passed in', () => {
		const text = {};
		const wrapper = mount(<TextBanner text={text} />);

		const element = wrapper.find('[data-hook="text-banner"]');

		expect(element).toHaveLength(0);
	});
});
