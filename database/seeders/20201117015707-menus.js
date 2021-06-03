'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('menus', [
      {
        "id": 1,
        "parentId": 0,
        "title": "首页",
        "path": "/layout/home",
        "name": "Home",
        "component": "Home",
        "isFrame": "1",
        "menuType": "C",
        "visible": "1",
        "orderNum": 1,
        "status": "1",
        "perms": "",
        "icon": "nav-home",
        "isDelete": "0",
        "remark": null,
        "createdAt": new Date(),
        "createdBy": "admin"
      },
      {
        "id": 2,
        "parentId": 0,
        "title": "系统管理",
        "path": "/system",
        "name": "Layout",
        "component": "Layout",
        "isFrame": "1",
        "menuType": "M",
        "visible": "1",
        "orderNum": 20,
        "status": "1",
        "perms": "",
        "icon": "system",
        "isDelete": "0",
        "remark": null,
        "createdAt": new Date(),
        "createdBy": "admin"
      },
      {
        "id": 3,
        "parentId": 2,
        "title": "用户中心",
        "path": "user",
        "name": "User",
        "component": "User",
        "isFrame": "1",
        "menuType": "C",
        "visible": "1",
        "orderNum": 1,
        "status": "1",
        "perms": "",
        "icon": "#",
        "isDelete": "0",
        "remark": null,
        "createdAt": new Date(),
        "createdBy": "admin"
      },
      {
        "id": 4,
        "parentId": 2,
        "title": "角色管理",
        "path": "role",
        "name": "Role",
        "component": "Role",
        "isFrame": "1",
        "menuType": "C",
        "visible": "1",
        "orderNum": 2,
        "status": "1",
        "perms": "",
        "icon": "#",
        "isDelete": "0",
        "remark": null,
        "createdAt": new Date(),
        "createdBy": "admin"
      },
      {
        "id": 5,
        "parentId": 2,
        "title": "菜单管理",
        "path": "menu",
        "name": "Menu",
        "component": "Menu",
        "isFrame": "1",
        "menuType": "C",
        "visible": "1",
        "orderNum": 3,
        "status": "1",
        "perms": "",
        "icon": "#",
        "isDelete": "0",
        "remark": null,
        "createdAt": new Date(),
        "createdBy": "admin"
      },
      {
        "id": 6,
        "parentId": 2,
        "title": "部门管理",
        "path": "dept",
        "name": "Dept",
        "component": "Dept",
        "isFrame": "1",
        "menuType": "C",
        "visible": "1",
        "orderNum": 4,
        "status": "1",
        "perms": "",
        "icon": "#",
        "isDelete": "0",
        "remark": null,
        "createdAt": new Date(),
        "createdBy": "admin"
      },
      {
        "id": 7,
        "parentId": 2,
        "title": "字典管理",
        "path": "dict",
        "name": "Dict",
        "component": "Dict",
        "isFrame": "1",
        "menuType": "C",
        "visible": "1",
        "orderNum": 6,
        "status": "1",
        "perms": "",
        "icon": "#",
        "isDelete": "0",
        "remark": null,
        "createdAt": new Date(),
        "createdBy": "admin"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('menus', null, {});
  }
};
