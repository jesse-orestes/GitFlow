module.exports = (sequelize, DataTypes) => {
    const Flavor = sequelize.define('Flavor', {
        flavor: DataTypes.STRING,
        amount: DataTypes.INTEGER,
    });
    return Flavor;
};