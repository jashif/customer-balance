const cors = require('cors');
const dotenv = require('dotenv');
// configurations
dotenv.config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const OpenApiValidator = require('express-openapi-validator');
const { join } = require('path');
const YAML = require('yamljs');

const AppRoutes = require('./api/routes');

const { initializeDatabase } = require('./infra/db/command-store');
const { errorMiddleware } = require('./api/middlewares/error-middleware');
const { requestMiddleware } = require('./api/middlewares/request-logger');

async function startServer() {
  // Boot express
  const app = express();
  const port = process.env.PORT || 3000;
  const base = process.env.base_url ?? '/api/';
  const openApiFilePath = '../spec.yaml';
  const swaggerDocument = YAML.load(join(__dirname, '../spec.yaml'));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  // middlewares
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(requestMiddleware);
  await initializeDatabase();
  app.get('/openapi.yaml', (req, res) => {
    res.sendFile(openApiFilePath, { root: __dirname });
  });
  // Apply OAS validation middleware
  app.use(
    OpenApiValidator.middleware({
      apiSpec: join(__dirname, '../spec.yaml'),
      validateRequests: true, // (default)
      validateResponses: false,
    })
  );

  // Application routing
  app.get('/', (req, res) => {
    res.status(200).send({ data: 'HI there' });
  });
  app.use(base, AppRoutes);
  // Start server
  app.listen(port, () => console.log(`Server is listening on port ${port}!`));
  app.use(errorMiddleware);
  // Handle unhandled promise rejections and exceptions
  process.on('unhandledRejection', (err) => {
    console.log(err);
  });

  process.on('uncaughtException', (err) => {
    console.log(err.message);
  });
}
startServer();
