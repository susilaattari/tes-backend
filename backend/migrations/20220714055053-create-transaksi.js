'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaksis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      namaBarang: {
        type: Sequelize.STRING
      },
      totalBarang: {
        type: Sequelize.INTEGER
      },
      hargaBarang: {
        type: Sequelize.INTEGER
      },
      grendTotal: {
        type: Sequelize.INTEGER
      },
      sisaTotal: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transaksis');
  }
};