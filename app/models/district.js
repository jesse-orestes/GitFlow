module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define('District', {
        district: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        amount: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    });
    return District;
}