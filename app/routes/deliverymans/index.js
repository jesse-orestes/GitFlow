const express = require('express');
const routes = express.Router();
const { ... deliverymanController } = require('../../controllers/DeliverymansController');
const { ... middleware } = require('../middlewares/deliveryman');


routes.get('/deliveryman', deliverymanController.index);
routes.get('/deliveryman/:id', deliverymanController.search);
routes.post('/deliveryman',middleware.create, deliverymanController.create);
routes.put('/deliveryman/:id',middleware.update, deliverymanController.update);
routes.delete('/deliveryman/:id', deliverymanController.destroy);


module.exports = routes;