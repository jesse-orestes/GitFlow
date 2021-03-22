'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return await queryInterface.createTable('Districts', {
       id: {
         allowNull: false,
         primaryKey:  true,
         autoIncrement: true,
         type: DataTypes.INTEGER,
       },
       district: {
         allowNull: false,
         type: DataTypes.STRING,
         unique: true
       },
       amount: {
         allowNull: false,
         type: DataTypes.INTEGER,
       },
       createdAt: {
         allowNull: false,
         type: DataTypes.DATE,
       },
       updatedAt: {
         allowNull: false,
         type: DataTypes.DATE,
       }
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return await queryInterface.dropTable('Districts');
  }
};
