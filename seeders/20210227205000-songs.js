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
  return await queryInterface.bulkInsert('Songs', [
    {
      name: 'Money',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Another brick in the wall',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Snow',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Wild world',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'The way we more',
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
