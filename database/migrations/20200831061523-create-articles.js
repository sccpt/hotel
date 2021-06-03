'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: '用户id'
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '标题'
      },
      subTitle: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '副标题'
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: '类型'
      },
      hot: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: '热度'
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
        comment: '内容'
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
    await queryInterface.dropTable('articles');
  }
};