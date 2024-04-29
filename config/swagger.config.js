const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'To Do list APIs',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
    },
  },
  apis: [process.cwd() + '/**/**.swagger.yaml'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
