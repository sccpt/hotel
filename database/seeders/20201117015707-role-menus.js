'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

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
    await queryInterface.bulkInsert('role_menus', [
      {
        "roleId": 1,
        "menuId": 1
      },
      {
        "roleId": 1,
        "menuId": 2
      },
      {
        "roleId": 1,
        "menuId": 3
      },
      {
        "roleId": 1,
        "menuId": 4
      },
      {
        "roleId": 1,
        "menuId": 5
      },
      {
        "roleId": 1,
        "menuId": 6
      },
      {
        "roleId": 1,
        "menuId": 7
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
    await queryInterface.bulkDelete('role_menus', null, {});
  }
};
