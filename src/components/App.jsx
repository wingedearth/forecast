import React from 'react';
import { object } from 'prop-types';

/**
 * @function App
 * @description - top level React component
 * @param {Object} data
 * @returns {React.ReactElement}
 */
const App = ({ data }) => {
	return (
		<main>
			<h1>{data?.title}</h1>
			<h3>A storm is coming...</h3>
		</main>
	);
};

App.defaultProps = {
	data: {}
};

App.propTypes = {
	data: object
};

export default App;
