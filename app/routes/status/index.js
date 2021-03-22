const express = require('express');
const routes = express.Router();

const {... statusController} = require('../../controllers/StatusController');

routes.get('/status', statusController.index);
routes.get('/status/:id', statusController.search);
routes.post('/status', statusController.create);
routes.put('/status/:id', statusController.update);
routes.delete('/status/:id', statusController.destroy);


module.exports = routes;