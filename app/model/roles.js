'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Roles = app.model.define('roles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    roleName: {
      allowNull: false,
      type: STRING,
      comment: '角色名称'
    },
    roleKey: {
      allowNull: false,
      type: STRING,
      comment: '角色权限字符串'
    },
    roleSort: {
      allowNull: false,
      type: INTEGER,
      comment: '显示顺序'
    },
    dataScope: {
      type: STRING,
      defaultValue: '1',
      comment: '数据范围（1：本部门及以下数据权限 2：本部门数据权限 3：仅本人权限）'
    },
    status: {
      type: STRING,
      defaultValue: '1',
      comment: '角色状态（1正常 0停用）'
    },
    isDelete: {
      type: STRING,
      defaultValue: '0',
      comment: '删除标志（0代表存在 1代表删除）'
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
  
  Roles.associate = function(models) {
    Roles.belongsToMany(app.model.Users, {  through: 'user_roles', foreignKey: 'roleId', as: 'users' });
    Roles.belongsToMany(app.model.Menus, { through: 'role_menus', foreignKey: 'roleId', as: 'menus'});
  };
  return Roles;
};