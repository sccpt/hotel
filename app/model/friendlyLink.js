'use strict';
/*
 * @Author: yurui 
 * @Date: 2020-04-01
 */

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const FriendlyLink = app.model.define('friendly_links', {
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
    title: {
      allowNull: false,
      type: STRING,
      comment: '名称'
    },
    url: {
      allowNull: false,
      type: STRING,
      comment: '链接'
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

  return FriendlyLink;
};