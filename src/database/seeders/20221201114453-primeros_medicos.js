'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      models.medico.findOrCreate({
        where: {
          id: "10"
        },
        defaults: {
          nombre: "Andres",
          apellido: "Calamaro",
          edad: 31,
          email: "andrescalamaro@gmail.com",
          especialidad: "Cardiologo"
        }
      }),

      models.medico.findOrCreate({
        where: {
          id: "11"
        },
        defaults: {
          nombre: "Mirta",
          apellido: "Gonzalez",
          edad: 86,
          email: "mirtagonzalez@hotmail.com",
          especialidad: "Pediatra"
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
