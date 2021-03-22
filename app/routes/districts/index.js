const express = require('express');
const routes = express.Router();
const { ... districtController } = require('../../controllers/DistrictsController');
const { ... middleware } = require('../middlewares/districts');

routes.get('/district', districtController.index);
routes.get('/district/:id', districtController.search);
routes.post('/district',middleware.create, districtController.create);
routes.put('/district/:id',middleware.update, districtController.update);
routes.delete('/district/:id', districtController.destroy);

module.exports = routes;