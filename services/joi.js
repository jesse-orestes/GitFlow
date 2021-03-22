const Joi = require('joi');

module.exports = {
    checkArray(params, body){
        const object = new Object();
        params.forEach(value => {
            object[value.column] = Joi[value.type]()[value.required]();
        })
        const schema = Joi.array().items(object);
        return schema.validate(body);
    },
    checkObject(params, body){
        const object = new Object();
        params.forEach(value => {
            object[value.column] = Joi[value.type]();
        });
        const schema = Joi.object(object);
        return schema.validate(body);
    }
}