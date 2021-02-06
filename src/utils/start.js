import React from 'react';
import { hydrate } from 'react-dom';
import App from '@/components/App';

/**
 * @func whenDOMIsReady
 * @param {func} fn callback to run when DOM is ready
 */
const whenDOMIsReady = (fn) => {
	if (document.readyState !== 'loading') {
		fn(window.__INITIAL_STATE__);
	} else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', () => {
			fn(window.__INITIAL_STATE__);
		});
	} else {
		document.attachEvent('onreadystatechange', () => {
			if (document.readyState !== 'loading') {
				fn(window.__INITIAL_STATE__);
			}
		});
	}
};

/**
 * @function start
 */
export default (Component) => {
	whenDOMIsReady((data) => {
		hydrate(
			<App data={data}>
				<Component />
			</App>,
			document.getElementById('root')
		);
	});
};
