const {Flavor} = require('../models/');
const Joi = require('joi');

module.exports = {
    async index(req, res) {
        const flavor = await Flavor.findAll();
        return res.send(flavor);
    },
    async search(req, res) {
        const flavor = await Flavor.findAll({
            where: req.params
        });
        return res.send(flavor);
    },
    async create(req, res) {
        const schema = Joi.array().items(
            Joi.object({
                flavor: Joi.string().required(),
                amount: Joi.number().required(),
            }));
        const {error} = schema.validate(req.body);
        if (error) {
            return res.status(400).send(error);
        }
        const flavor = await Flavor.bulkCreate(req.body);
        return res.send(flavor);
    },
    async update(req, res) {
        const schema = Joi.object({
            flavor: Joi.string(),
            amount: Joi.number(),
        });
        const {error} = schema.validate(req.body);
        if (error) {
            return res.status(400).send(error);
        }
        const flavor = await Flavor.update(req.body, {
            where: req.params
        });
        if (flavor == 1) {
            return res.send({message: "Record updated successfully"});
        }
        return res.status(400).send({Error: "Error in update record"});
    },
    async destroy(req, res) {
        const flavor = await Flavor.destroy({
            where: req.params
        });
        if (flavor) {
            return res.send({message: "Record deleted successfully"});
        }
        return res.status(400).send({Error: "Error deleting the record"});
    }
}