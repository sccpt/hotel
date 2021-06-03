'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Notice = app.model.define('notices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    title: {
      allowNull: false,
      type: STRING,
      comment: '公告标题'
    },
    content: {
      allowNull: false,
      type: TEXT,
      comment: '公告内容'
    },
    isRead: {
      allowNull: true,
      type: STRING,
      defaultValue: 0,
      comment: '已读状态（0未读，1已读）'
    },
    remark: {
      allowNull: true,
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
  return Notice;
};