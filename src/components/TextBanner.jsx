import React from 'react';
import { string } from 'prop-types';
import './TextBanner.scss';

/**
 * @function TextBanner
 * @description provides an h2 text banner in a container
 * @param {String} [text]
 * @returns {React.ReactElement}
 */
const TextBanner = ({ text }) =>
	text && typeof text === 'string' ? (
		<div className="text-banner container" data-hook="text-banner">
			<h2 className="text-banner__text" data-hook="text-banner-text">{text}</h2>
		</div>
	) : null;

TextBanner.propTypes = {
	text: string
};

export default TextBanner;
