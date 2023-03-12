// Load the module dependencies
import express from 'express';
import indexRoute from '../app/route/index.route.js';
// Define the Express configuration method
export default function() {
	// Create a new Express application instance
	const app = express();

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(express.urlencoded({
		extended: true
	}));
	app.use(express.json());


	// Set the application view engine and 'views' folder
	app.set('views', './app/view');
	app.set('view engine', 'ejs');

	// Load the 'index' routing file
	indexRoute(app);

	// Configure static file serving
	app.use(express.static('./public'));

	// Return the Express application instance
	return app;
};