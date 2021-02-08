import React from 'react';
import { object } from 'prop-types';
import WeatherResult from './WeatherResult';
import './AllResults.scss';

/**
 * @function AllResults
 * @description provides five days of weather forecast results
 * @param {Object} data - from
 * @returns {React.ReactElement}
 */
const AllResults = ({ data }) => {
	if (!data?.list) return null;

	const allDays = data.list.filter((each, index) => {
		if (index === 0) return true;
		if (index % 8 === 0) return true;
		return false;
	});

	return (
		<div className="all-results">
			{allDays.map((day, index) => (
				<WeatherResult
					key={`weather-result-${index}`}
					rawDate={day?.dt}
					tempData={day?.main}
					weather={day?.weather?.[0]}
					resultIndex={index}
				/>
			))}
		</div>
	);
};

AllResults.propTypes = {
	data: object.isRequired
};

export default AllResults;
