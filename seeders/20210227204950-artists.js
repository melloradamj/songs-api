'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Artists', [
      {
        name: 'Pink Floyd',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Red Hot Chili Peppers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paul Weller',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Langhorne Slim',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Law',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
