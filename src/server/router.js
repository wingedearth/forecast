import express from 'express';
import HomeController from './controllers/HomeController';
import VersionController from './controllers/VersionController';

// TODO: replace with a more formal 404 page experience
const FourOhFourController = (req, res) => {
	const status = 404;
	res.status(status).send('Page not found. Check your path, if you please.');
}

// Instantiate Express router
const router = express.Router();

// TODO: add a route for querying weather API from server
router.get('/version', VersionController);
router.get('/', HomeController);
router.get('*', FourOhFourController);

export default router;
