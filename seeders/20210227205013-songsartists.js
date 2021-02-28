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
   return await queryInterface.bulkInsert('songsartists', [
    {
      songId: 1,
      artistId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      songId: 2,
      artistId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      songId: 3,
      artistId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      songId: 4,
      artistId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      songId: 5,
      artistId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      songId: 5,
      artistId: 5,
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
