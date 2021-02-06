import React from 'react';
import { func, string } from 'prop-types';
import './Icon.scss';

/**
 * @function Icon
 * @description provides an image tag wrapped with a span, or an anchor if href prop exists
 * @param {String} [alt]
 * @param {String} [className]
 * @param {String} [href] wraps image with an anchor tag unless onClick is passed
 * @param {Function} [onClick] takes precedence over href
 * @param {String} src
 */
const Icon = ({ alt, className, href, onClick, src }) => {
	const classString = className ? `icon ${className}` : 'icon';

	return onClick ? (
		<span className={classString} onClick={onClick}>
			<img alt={alt} src={src} />
		</span>
	) : href ? (
		<a className={classString} href={href} target="_blank" rel="noreferrer">
			<img alt={alt} src={src} />
		</a>
	) : (
		<span className={classString}>
			<img alt={alt} src={src} />
		</span>
	);
};

Icon.propTypes = {
	alt: string,
	className: string,
	href: string,
	onClick: func,
	src: string.isRequired
};

export default Icon;
