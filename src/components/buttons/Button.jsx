import React from 'react';
import { func, string } from 'prop-types';
import './Button.scss';

/**
 * @function Butotn
 * @param {String} props.children
 * @param {String} [props.className]
 * @param {Function} props.onClick
 */
const Button = ({ children, className, onClick }) => {
	return (
		<button className={`button ${className || ''}`} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: string.isRequired,
	className: string,
	onClick: func.isRequired
};

export default Button;
