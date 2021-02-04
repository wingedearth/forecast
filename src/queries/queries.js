import axios from 'axios';

// TODO: add validation for possible country codes, city names

const sendRequest = (urlString) =>
	axios.get(urlString)
		.then(response => {
			return { data: response?.data };
		})
		.catch(error => {
			console.error('error:', error.message);
			return { error };
		});

/**
 * @function queryById
 * @param {Object} Object
 * @param {String} Object.cityid
 * @param {String} appid
 */
export const queryById = ({ cityid }, appid) => {
	if (!cityid) return Promise.reject({ error: 'invalid request' });

	const urlString = `http://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${appid}&units=imperial`;

	return sendRequest(urlString);
};

/**
 * @function queryByCity
 * @param {Object} Object
 * @param {String} Object.city
 * @param {String} Object.state
 * @param {String} Object.country
 * @param {String} appid
 */
export const queryByCity = ({ city, state, country }, appid) => {
	if (!city) return Promise.reject({ error: 'invalid request' });

	const q = state ? `${city},${state},us` : country ? `${city},${country}` : city;
	const urlString = `http://api.openweathermap.org/data/2.5/forecast?appid=${appid}&units=imperial&q=${q}`

	return sendRequest(urlString);
};

/**
 * @function queryByZip
 * @param {Object} Object
 * @param {String} Object.zip
 * @param {String} appid
 */
export const queryByCity = ({ zip, country = 'us' }, appid) => {
	if (!zip) return Promise.reject({ error: 'invalid request' });

	const zip = `${zip},${country}`;
	const urlString = `http://api.openweathermap.org/data/2.5/forecast?appid=${appid}&units=imperial&q=${q}`

	return sendRequest(urlString);
};