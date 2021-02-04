import * as queries from './queries';

/**
 * @function getQuery
 * @description selects a query based on queryType
 * @param {String} queryType
 * @returns {Promise|null}
 */
export default (queryType) => ({
	BY_ID: queries?.queryById,
	BY_CITY: queries?.queryByCity,
	BY_ZIP: queries?.queryByZip
}[queryType]) || null;
