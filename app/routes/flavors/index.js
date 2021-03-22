const express = require('express');
const routes = express.Router();

const { ... rotasController } = require('../../controllers/FlavorsController');
const { ... middleware } = require('../middlewares/flavors');

routes.get('/flavors', rotasController.index);
routes.get('/flavors/:id', rotasController.search);
routes.post('/flavors', middleware.create,rotasController.create);
routes.delete('/flavors/:id',rotasController.destroy);
routes.put('/flavors/:id',middleware.update, rotasController.update);

module.exports = routes;