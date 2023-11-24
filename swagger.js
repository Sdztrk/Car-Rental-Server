const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Car Rental API',
    description: 'This API is designed for a Car Rental.'
  },
  host: 'localhost:5002',
  securityDefinitions: {
		JWT: {
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
			description: 'Enter Your AccessToken (JWT) for Login. Example: <b>Bearer <i>...token...<i></b>'
		}
	},
	security: [{ "JWT": true }],
};

const outputFile = './swagger.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc);