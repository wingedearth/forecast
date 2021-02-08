import React from 'react';
import Search from '@/components/search/Search';
import './Home.scss';

const directions = 'Enter your ZIP code to get a five day forecast!';

const Home = () => {
	return (
		<div className="home container" data-hook="home">
			<p className="emoji">🌧️🌞☁️⚡❄️</p>
			<h2 className="home__directions">{directions}</h2>
			<Search />
		</div>
	);
};

export default Home;
