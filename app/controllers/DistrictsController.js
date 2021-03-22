const {District} = require('../models');
const Joi = require("joi");

module.exports = {
    async index(req, res) {
        await District.findAll().then(resolve => {
            return res.send(resolve);
        }).catch(reject => {
            return res.status(400).send({"Error": {"code": reject.original.code, "message": reject.original.sqlMessage}});
        });
    },
    async search(req, res) {
        return res.send(await District.findAll({where: req.params}));
    },
    async create(req, res) {
        await District.bulkCreate(req.body).then(resolve => {
            if(resolve.length)
                return res.send(resolve);
            return res.status(400).send({Error: "No record created"});
        }).catch(reject => {            
            return res.status(400).send({"Error": {"code": reject.original.code, "message": reject.original.sqlMessage}});
        })
    },
    async update(req, res) {
        if (await District.update(req.body, {where: req.params}) == 1)
            return res.send({message: "Record updated successfully"});
        return res.status(400).send({Error: "Error in updating record"});
    },
    async destroy(req, res) {
        if (await District.destroy({where: req.params}))
            return res.send({message: "Record deleted successfully"});
        return res.status(400).send({Error: "Error deleting the record"});
    }
}