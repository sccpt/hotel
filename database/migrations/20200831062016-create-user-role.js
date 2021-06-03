'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('user_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      userId: {
        allowNull: false,
        type: INTEGER,
        comment: '用户id'
      },
      roleId: {
        allowNull: false,
        type: INTEGER,
        comment: '角色id'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_roles');
  }
};