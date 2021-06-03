'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const UserRole = app.model.define('user_roles', {
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

  return UserRole;
};