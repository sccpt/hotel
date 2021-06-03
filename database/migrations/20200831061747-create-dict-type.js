'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('dict_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      dictName: {
        allowNull: false,
        type: STRING,
        comment: '字典名称'
      },
      dictType: {
        allowNull: false,
        type: STRING,
        comment: '字典类型'
      },
      status: {
        type: STRING,
        defaultValue: '1',
        comment: '菜单状态（1正常 2停用）'
      },
      remark: {
        type: STRING,
        comment: '备注'
      },
      createdAt: {
        allowNull: true,
        type: DATE,
        comment: '创建时间'
      },
      createdBy: {
        allowNull: true,
        type: STRING,
        comment: '创建者'
      },
      updatedAt: {
        allowNull: true,
        type: DATE,
        comment: '更新时间'
      },
      updatedBy: {
        allowNull: true,
        type: STRING,
        comment: '更新者'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dict_types');
  }
};