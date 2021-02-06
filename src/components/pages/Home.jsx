import React from 'react';
import { useAppContext } from '@/components/AppContext';

const Home = () => {
	const { pageTitle } = useAppContext();

	return (
		<div className="container">
			<h1>{pageTitle}</h1>
			<p className="emoji">🌩️🌞☁️⚡</p>
			<h3>A storm is coming...</h3>
		</div>
	);
};

export default Home;
