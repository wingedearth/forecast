import React from 'react';
import { renderToString } from 'react-dom/server';
import template from '@/server/template';
import App from '@/components/App';

const title = 'Forecast';
const entryName = 'app';

/**
 * @function HomeController
 * @requires Express
 * @param {Object} req - request
 * @param {Object} res - response
 */
const HomeController = (req, res) => {
	const params = {
		...req.params,
		...req.query
	};

	const data = {
		params,
		title
	};

	// Build HTML
	const markup = renderToString(<App data={data} />);
	const page = template(data, markup, entryName);

	res.send(page);
};

export default HomeController;
