'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Departments = app.model.define('departments', {
    deptId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    parentId: {
      allowNull: false,
      type: INTEGER,
      comment: '父Id'
    },
    deptName: {
      allowNull: false,
      type: STRING,
      comment: '部门名称'
    },
    orderNum: {
      allowNull: false,
      type: INTEGER,
      comment: '显示顺序'
    },
    status: {
      type: STRING,
      defaultValue: '1',
      comment: '部门状态（1正常 0停用）'
    },
    isDelete: {
      type: STRING,
      defaultValue: '0',
      comment: '删除标志（0代表存在 1代表删除）'
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

  return Departments;
};