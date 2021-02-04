import axios from 'axios';
import { query } from 'express';
import getQuery from '@/queries/getQuery';

/**
 * @function ApiController
 * @description takes weather API requests, validates, and then queries Open Weather Map
 * @param {Object} req 
 * @param {Object} res 
 */
const ApiController = (req, res) => {
	const { queryType, ...inputData } = req.body;
	const appid = process.env.APP_ID;
	const query = getQuery(queryType);

	if (!query) res.status(400).json({ "error": "no data" });

	query(inputData, appid)
		.then(data => {
			res.json(data);
		})
		.catch(error => {
			res.status(400).json(error)
		})
};

export default ApiController;
