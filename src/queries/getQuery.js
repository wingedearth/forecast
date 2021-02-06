import { queryById, queryByCity, queryByZip } from './queries';

/**
 * @function getQuery
 * @description selects a query based on queryType
 * @param {String} queryType
 * @returns {Promise|null}
 */
export default (queryType) =>
	({
		BY_ID: queryById,
		BY_CITY: queryByCity,
		BY_ZIP: queryByZip
	}[queryType] || null);
