'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-05-03
 */

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Articles = app.model.define('articles', {
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
      comment: '标题'
    },
    subTitle: {
      allowNull: false,
      type: STRING,
      comment: '副标题'
    },
    photo: {
      allowNull: true,
      type: STRING,
      comment: '封面图片'
    },
    photos: {
      allowNull: true,
      type: STRING,
      comment: '更多图片'
    },
    type: {
      allowNull: true,
      type: STRING,
      comment: '类型'
    },
    isTop: {
      allowNull: true,
      type: INTEGER,
      defaultValue: 0,
      comment: '首页推荐'
    },
    hot: {
      type: INTEGER,
      defaultValue: 0,
      comment: '热度'
    },
    content: {
      allowNull: false,
      type: TEXT,
      comment: '内容'
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

  return Articles;
};