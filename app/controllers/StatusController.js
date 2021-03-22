const { Status } = require('../models/');
let status = "";

module.exports = {
    async index(req, res) {
        status = await Status.findAll();
        return res.send(status);
    },
    async search(req, res){
        status = await Status.findAll({
            where: req.params
        });
        return res.send(status);
    },
    async create(req, res){
        status = await Status.bulkCreate(req.body);
        return res.send(status);
    },
    async update(req, res){
        status = await Status.update(req.body, {
            where: req.params
        });
        return res.end();
    },
    async destroy(req, res){
        status = await Status.destroy({
            where: req.params
        });
        return res.end();
    }
}