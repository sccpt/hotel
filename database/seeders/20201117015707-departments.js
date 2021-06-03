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
    await queryInterface.bulkInsert('departments', [
      {
        "parentId": 0,
        "deptName": "总部",
        "orderNum": 1,
        "status": "1",
        "isDelete": "0",
        "createdAt": new Date(),
        "createdBy": "admin",
        "updatedAt": null,
        "updatedBy": null
      },
      {
        "parentId": 1,
        "deptName": "技术部",
        "orderNum": 1,
        "status": "1",
        "isDelete": "0",
        "createdAt": new Date(),
        "createdBy": "admin",
        "updatedAt": null,
        "updatedBy": null
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('departments', null, {});
  }
};
