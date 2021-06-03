'use strict';
/*
 * @Author: yurui 
 * @Date: 2020-08-01
 */

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const RoleMenu = app.model.define('role_menus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    roleId: {
      allowNull: false,
      type: INTEGER,
      comment: '角色roleId'
    },
    menuId: {
      allowNull: false,
      type: INTEGER,
      comment: '菜单menuId'
    }
  });

  return RoleMenu;
};