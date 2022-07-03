// Import Express and set up the app
import express from 'express';
const app = express();

/*
* Helpers for Various Tasks
*/

// Helper function to reverse a string


// Helper function to shorten a string to fifty characters


/*
* Route Handlers
*/

// Home route
import routes from './routes.js'
app.use(routes)

/*
* 404 and Global Error Handlers
*/
import nonExistError from './errorHandlers.js'
import globalError from './errorHandlers.js';

// Error handler for handling non-existent routes
app.use(nonExistError);

// Global error handler
app.use(globalError);

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})