import React from 'react';
import { object } from 'prop-types';
import '../styles/styles.scss';
import './App.scss';

/**
 * @function App
 * @description - top level React component
 * @param {Object} data
 * @returns {React.ReactElement}
 */
const App = ({ data }) => {
	return (
		<main>
			<div className="container">
				<h1>{data?.title}</h1>
				<p className="emoji">🌩️🌞☁️⚡</p>
				<h3>A storm is coming...</h3>
				<h3>{data?.test}</h3>
			</div>
		</main>
	);
};

App.defaultProps = {
	data: {}
};

App.propTypes = {
	data: object
};

App.displayName = 'App';

export default App;
