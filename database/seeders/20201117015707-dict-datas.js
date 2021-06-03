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
    await queryInterface.bulkInsert('dict_datas', [
      {
        "dictSort": 1,
        "dictLabel": "正常",
        "dictValue": "1",
        "dictType": "sys_show_hide",
        "cssClass": null,
        "listClass": null,
        "isDefault": "Y",
        "status": "1",
        "remark": "正常",
        createdAt: new Date(),
        createdBy: 'admin'
      },
      {
        "dictSort": 2,
        "dictLabel": "停用",
        "dictValue": "0",
        "dictType": "sys_show_hide",
        "cssClass": null,
        "listClass": null,
        "isDefault": "Y",
        "status": "1",
        "remark": "停用",
        createdAt: new Date(),
        createdBy: 'admin'
      },
      {
        "dictSort": 1,
        "dictLabel": "正常",
        "dictValue": "1",
        "dictType": "sys_normal_disable",
        "cssClass": null,
        "listClass": null,
        "isDefault": "Y",
        "status": "1",
        "remark": "正常",
        createdAt: new Date(),
        createdBy: 'admin'
      },
      {
        "dictSort": 2,
        "dictLabel": "停用",
        "dictValue": "0",
        "dictType": "sys_normal_disable",
        "cssClass": null,
        "listClass": null,
        "isDefault": "Y",
        "status": "1",
        "remark": "停用",
        createdAt: new Date(),
        createdBy: 'admin'
      },
      {
        "dictSort": 2,
        "dictLabel": "男",
        "dictValue": "1",
        "dictType": "sys_user_sex",
        "cssClass": null,
        "listClass": null,
        "isDefault": "Y",
        "status": "1",
        "remark": "男",
        createdAt: new Date(),
        createdBy: 'admin'
      },
      {
        "dictSort": 1,
        "dictLabel": "女",
        "dictValue": "0",
        "dictType": "sys_user_sex",
        "cssClass": null,
        "listClass": null,
        "isDefault": "Y",
        "status": "1",
        "remark": "女",
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
    await queryInterface.bulkDelete('dict_datas', null, {});
  }
};
