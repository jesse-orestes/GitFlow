module.exports = (sequelize, DataTypes) => {
    const Deliveryman = sequelize.define('Deliveryman', {
        name: DataTypes.STRING,
        fixed: DataTypes.INTEGER,
    });
    return Deliveryman;
}