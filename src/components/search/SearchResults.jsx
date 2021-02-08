import React, { Fragment, useEffect, useState } from 'react';
import { object, string } from 'prop-types';
import { queryByZip } from './searchQueries';
import AllResults from './AllResults';
import TextBanner from '@/components/TextBanner';
import './SearchResults.scss';

/**
 * @function LocationBanner
 * @requires TextBanner
 * @description provides a TextBanner with the location being searched
 * @param {String} [city]
 * @param {String} [country]
 * @param {String} [state]
 * @param {String} [zip]
 * @returns {React.ReactElement}
 */
const LocationBanner = ({ city, country, state, zip }) => {
	const location = [city, state, zip, country].filter(Boolean).join(', ');

	return <TextBanner text={location} />;
};

LocationBanner.propTypes = {
	city: string,
	country: string,
	state: string,
	zip: string
};

/**
 * @function SearchResults
 * @param {Object} [searchParams]
 * @param {String} searchType
 */
const SearchResults = ({ searchParams, searchType }) => {
	const [weatherData, updateWeatherData] = useState(null);
	const [loading, updateLoading] = useState(null);

	useEffect(() => {
		if (searchParams) {
			// send axios POST query to /api
			updateLoading('loading');

			queryByZip(searchParams, searchType)
				.then(({ data }) => {
					updateLoading('loaded');
					updateWeatherData(data);
				})
				.catch((err) => {
					updateLoading('error');
					console.error('error:', err);
				});
		} else {
			updateWeatherData(null);
		}
	}, [searchParams]);

	return weatherData ? (
		<div className="search-results">
			{loading === 'loading' && <p>Loading...</p>}
			{loading === 'error' && <p>Query Error</p>}
			{loading === 'loaded' && (
				<Fragment>
					<LocationBanner {...searchParams} />
					<AllResults data={weatherData?.data} />
				</Fragment>
			)}
		</div>
	) : null;
};

SearchResults.propTypes = {
	searchParams: object,
	searchType: string.isRequired
};

export default SearchResults;
