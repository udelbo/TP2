'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      models.usuario.findOrCreate({
        where: {
          id: "3"
        },
        defaults: {
          nombre: "Roberto2",
          apellido: "Carlos2",
          edad: 31,
          email: "robertocarlos@gmail.com"
        }
      }),

      models.usuario.findOrCreate({
        where: {
          id: "4"
        },
        defaults: {
          nombre: "Juana2",
          apellido: "Irene2",
          edad: 86,
          email: "juanairene@hotmail.com"
        }
      }),
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
