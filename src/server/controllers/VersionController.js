import packageJson from '../../../package.json';
import { APP_VERSION, NODE_ENV } from '@/config/config';

/**
 * @function VersionController
 * @requires Express
 * @param {Object} req - request
 * @param {Object} res - response
 */
const VersionController = (req, res) => {
	const data = {
		name: packageJson?.name,
		version: APP_VERSION,
		environment: NODE_ENV
	};

	res.json(data);
};

export default VersionController;
