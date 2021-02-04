import template from '@/server/template';

const title = 'Forecast';
const entryName = 'forecast';

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

	const paramsArray = Object.keys(params).map(paramKey => `${paramKey}`).join(', ') || 'none'; 

	const markup = `<p>Welcome to Forecast. Weather forecast will be available soon.</p>
	<p>Params received: ${paramsArray}</p>
	<p>Title: ${title}`;

	const page = template(data, markup, entryName);

	res.send(page);
};

export default HomeController;
