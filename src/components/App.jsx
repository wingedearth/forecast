import React from 'react';
import { any, object } from 'prop-types';
import Navigation from '@/components/Navigation';
import { AppContext } from './AppContext';
import '@/styles/styles.scss';
import './App.scss';

/**
 * @function App
 * @description - top level React component
 * @param {Object} data
 * @returns {React.ReactElement}
 */
const App = ({ children, data }) => {
	return (
		<AppContext.Provider value={data}>
			<main>
				<Navigation />
				{children}
			</main>
		</AppContext.Provider>
	);
};

App.defaultProps = {
	data: {}
};

App.propTypes = {
	children: any,
	data: object
};

App.displayName = 'App';

export default App;
