'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('notices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      noticeTitle: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '公告标题'
      },
      noticeType: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: '1',
        comment: '公告类型（1通知 2公告）'
      },
      noticeContent: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '内容'
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: '1',
        comment: '公告状态（1正常 0停用）'
      },
      remark: {
        type: Sequelize.STRING,
        comment: '备注'
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '创建时间'
      },
      createdBy: {
        allowNull: true,
        type: Sequelize.STRING,
        comment: '创建者'
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '更新时间'
      },
      updatedBy: {
        allowNull: true,
        type: Sequelize.STRING,
        comment: '更新者'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('notices');
  }
};