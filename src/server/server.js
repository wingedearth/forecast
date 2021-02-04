import express from 'express';
import bodyParser from 'body-parser';
import router from './router';

const port = process.env.PORT || 4000;
const app = express();

// Attach middleware
app.use(bodyParser.json())

// log server errors
app.on('error', (err) => {
	console.error(err?.message);
});

// Attach router
app.use(router);

const server = app.listen(port, () => {
	console.log(`A goblin-mage has conjured a server at port, ${port}.`);
});

// graceful exit
process.on('SIGINT', () => {
	server.close((err) => {
		if (err) return process.exit(1);

		process.exit(0);
	});
});
