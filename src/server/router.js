import express from 'express';
import HomeController from './controllers/HomeController';
import VersionController from '@/server/controllers/VersionController';
import ApiController from '@/server/controllers/ApiController';

// TODO: replace with a more formal 404 page experience
const FourOhFourController = (req, res) => {
	const status = 404;
	res.status(status).send('Page not found. Check your path, if you please.');
}

// Instantiate Express router
const router = express.Router();

// TODO: add a route for querying weather API from server
router.post('/api', ApiController);
router.get('/version', VersionController);
router.get('/', HomeController);
router.get('*', FourOhFourController);

export default router;
