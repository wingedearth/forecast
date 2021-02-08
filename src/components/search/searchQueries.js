import axios from 'axios';

const urlString = '/api';

const sendRequest = (params) =>
	axios
		.post(urlString, params)
		.then((response) => {
			return { data: response?.data };
		})
		.catch((error) => {
			console.error('error:', error.message);
			return { error };
		});

export const queryByZip = ({ zip, country = 'us' }, searchType) => {
	if (!zip) return Promise.reject({ error: 'invalid request' });

	return sendRequest({
		country,
		zip,
		queryType: searchType
	});
};
