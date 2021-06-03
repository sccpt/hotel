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
    await queryInterface.bulkInsert('dict_types', [
      {
        "dictName":"显示状态",
        "dictType":"sys_show_hide",
        "status":"1",
        "remark":"显示状态",
        createdAt: new Date(),
        createdBy: 'admin'
      },
      {
        "dictName":"状态数据",
        "dictType":"sys_normal_disable",
        "status":"1",
        "remark":"状态数据",
        createdAt: new Date(),
        createdBy: 'admin'
      },
      {
        "dictName":"性别",
        "dictType":"sys_user_sex",
        "status":"1",
        "remark":"性别",
        createdAt: new Date(),
        createdBy: 'admin'
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
    await queryInterface.bulkDelete('dict_types', null, {});
  }
};
