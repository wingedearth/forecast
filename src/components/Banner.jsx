import React from 'react';
import { any } from 'prop-types';
import './Banner.scss';

/**
 * @function Banner
 * @param {Array} [icons]
 * @returns {React.ReactElement}
 */
const Banner = ({ children }) => {
	return (
		<div className="banner">
			<div className="container">{children}</div>
		</div>
	);
};

Banner.propTypes = {
	children: any
};

export default Banner;
