import getQuery from './getQuery';
import { queryById, queryByCity, queryByZip } from './queries';

describe('getQuery', () => {
	it('returns queryById when BY_ID is passed in as queryType', () => {
		expect(getQuery('BY_ID')).toBe(queryById);
	});
	it('returns queryByByCity when BY_CITY is passed in as queryType', () => {
		expect(getQuery('BY_CITY')).toBe(queryByCity);
	});
	it('returns queryByZip when BY_ZIP is passed in as queryType', () => {
		expect(getQuery('BY_ZIP')).toBe(queryByZip);
	});
});
