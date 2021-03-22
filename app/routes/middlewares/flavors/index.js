const joi = require('../../../../services/joi');

module.exports = {
    create(req, res, next){
        const {error} = joi.checkArray([
            {column: "flavor", type: "string", required: "required"},
            {column: "amount", type: "number", required: "required"}
        ], req.body);
        if(error)
            return res.status(400).send(error);
        return next();
    },
    update(req,res,next){
        const {error} = joi.checkObject([
            {column: "flavor", type: "string"},
            {column: "amount", type: "number"}
        ], req.body);
        if(error)
            return res.status(400).send(error);
        return next();
    }
}
