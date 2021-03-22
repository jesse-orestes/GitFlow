const {...models} = require('../app/models');

const find = async () => {
    const district = await models.District.findAll({where: {
        "district": "Santa Rita"
    }
    });
    console.log("district");
    console.log(district);     
}
find();