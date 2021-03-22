const {Deliveryman} = require('../models/');
const {...joi} = require('../../services/joi');

module.exports = {
    async index(req, res) {
        return res.send(await Deliveryman.findAll());
    },
    async search(req, res) {
        return res.send(await Deliveryman.findAll({where: req.params}));
    },
    async create(req, res) {
        return res.send(await Deliveryman.bulkCreate(req.body)).then(resolve => {
            return res.send(resolve);
        }).catch(reject => {
            return res.status(400).send({"Error": {"code": reject.original.code, "message": reject.original.sqlMessage}});
        });
    },
    async update(req, res) {
        if (await Deliveryman.update(req.body, {where: req.params}) == 1)
            return res.send({message: "Record updated successfully"});
        return res.status(400).send({Error: "Error in updating record"});
    },
    async destroy(req, res) {
        if (await Deliveryman.destroy({where: req.params}))
            return res.send({message: "Record deleted successfully"});
        return res.status(400).send({Error: "Error deleting the record"});
    }
}