import serialize from 'serialize-javascript';

/**
 * @function template
 * @param {Object} data
 * @param {String} markup
 * @param {String} entryName
 * @returns {String} html markup
 */
const template = (data, markup, entryName) => {
	const { title } = data;

	return `
	<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>${title}</title>
			</head>
			<body>
				<div id="root">${markup}</div>
				<script>window.__INITIAL_STATE__ = ${serialize(data)}</script>
			</body>
		</html>`;
};

export default template;
