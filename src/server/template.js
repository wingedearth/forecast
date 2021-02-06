import serialize from 'serialize-javascript';

/**
 * @function getScriptTags
 * @description takes an array of filenames and creates a string including a script tag to import each javascript file referenced by name
 * @param {array} files - file names
 * @returns {string}
 */
export const getScriptTags = (files) => {
	if (files) {
		return files
			.map((file) => `<script type="text/javascript" src="/${file}"></script>`)
			.join('\n');
	}
	console.log('js files not found.');
};

/**
 * @function getStyleTags
 * @description takes an array of filenames and creates a string including a link tag to import each css file referenced by name
 * @param {Array} files - file names
 * @returns {Array}
 */
export const getStyleTags = (files) =>
	files.map((file) => `<link rel="stylesheet" href="/${file}"></link>`).join('\n');

/**
 * @function template
 * @param {Object} data
 * @param {String} markup
 * @param {String} entryName
 * @returns {String} html markup
 */
const template = (data, markup, entryName) => {
	const { title } = data;
	const manifest = require('../../dist/client/assets-manifest.json');
	const entry = manifest?.entrypoints?.[entryName]?.assets;
	const scriptTags = getScriptTags(entry?.js);
	const styleTags = getStyleTags(entry?.css);

	return `
	<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>${title}</title>
				<link rel="preconnect" href="https://fonts.gstatic.com"> 
				<link href="https://fonts.googleapis.com/css2?family=Exo:wght@500;600;700;800&display=swap" rel="stylesheet">
				${styleTags}
			</head>
			<body>
				<div id="root">${markup}</div>
				<script>window.__INITIAL_STATE__ = ${serialize(data)}</script>
				${scriptTags}
			</body>
		</html>`;
};

export default template;
