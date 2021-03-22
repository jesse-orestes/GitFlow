const {...joi} = require('../../../../services/joi');

module.exports = {
    create(req, res, next) {
        const {error} = joi.checkArray([
            {column: "name", type: "string", required: "required"},
            {column: "fixed", type: "number", required: "required"}
        ], req.body);
        if (error)
            return res.status(400).send(error);
        return next();
    },
    update(req, res, next) {
        const {error} = joi.checkObject([
            {column: "name", type: "string"},
            {column: "fixed", type: "number"}
        ], req.body);
        if (error)
            return res.status(400).send(error);
        return next();
    }
}