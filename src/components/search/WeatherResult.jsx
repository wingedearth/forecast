import React from 'react';
import { number, object } from 'prop-types';
import { format, fromUnixTime } from 'date-fns';
import './WeatherResult.scss';

const getPrettyDate = (myDate) => format(myDate, 'MMMM do, yyyy');

/**
 * @function WeatherResult
 * @param {String} rawDate - date string
 * @param {Number} resultIndex
 * @param {Object} tempData
 * @param {Object} weather
 * @returns {React.ReactElement}
 */
const WeatherResult = ({ rawDate, resultIndex, tempData, weather }) => {
	// Open Weather Map weather conditions doc: https://openweathermap.org/weather-conditions
	const weatherText = weather?.description || '';

	// Open Weather Map hosts the weather icons referenced in their data
	const weatherIcon = `http://openweathermap.org/img/wn/${weather?.icon}@2x.png`;

	// convert and format raw date
	const prettyDate = getPrettyDate(fromUnixTime(rawDate));

	const reverseColorsClass = resultIndex % 2 === 1 ? 'weather-result--reverse' : '';

	return (
		<div className={`weather-result container ${reverseColorsClass}`}>
			<p>{prettyDate}</p>
			<img className="weather-result__icon" src={weatherIcon} />
			{resultIndex === 0 && <p>Current Temperature: {tempData?.temp}°F</p>}
			<p className="weather-result__description">{weatherText}</p>
			<p>High: {tempData?.temp_max}°F</p>
			<p>Low: {tempData?.temp_min}°F</p>
			<p></p>
		</div>
	);
};

WeatherResult.propTypes = {
	rawDate: number.isRequired,
	resultIndex: number.isRequired,
	tempData: object.isRequired,
	weather: object.isRequired
};

export default WeatherResult;
