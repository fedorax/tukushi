// Load the 'index' controller
import indexController from '../controller/index.controler';

// Define the routes module' method
export default function(app) {
	// Mount the 'index' controller's 'render' method
	app.get('/', indexController);
};