module.exports = app => {
  const { router, controller, io } = app;
  /**
   * 后台管理系统模块
  */
  // 特殊处理
  router.post(`/api/${app.config.public}/login`, controller[app.config.public].admin.system.common.login); // 登录
  router.post(`/api/${app.config.public}/logout`, controller[app.config.public].admin.system.common.logout); // 登出
  router.get(`/api/${app.config.public}/captcha`, controller[app.config.public].admin.system.common.captcha); // 验证码
  router.post(`/api/${app.config.public}/upload`, controller[app.config.public].admin.system.common.upload); // 上传
  router.get(`/api/${app.config.public}/admin/system/getInfo`, controller[app.config.public].admin.system.user.getInfo); // 获取用户信息
  router.put(`/api/${app.config.public}/admin/system/user/:id/resetPwd`, app.middleware.auth({
    put: 'system:user:resetPwd'
  }), controller[app.config.public].admin.system.common.resetPwd); // 重置密码
  router.put(`/api/${app.config.public}/admin/system/user/:id/updateUserImg`, app.middleware.auth({
    put: 'system:user:updateUserImg'
  }), controller[app.config.public].admin.system.common.updateUserImg); // 修改头像
  router.put(`/api/${app.config.public}/admin/system/user/:id/updateUserPwd`, app.middleware.auth({
    put: 'system:user:updateUserPwd'
  }), controller[app.config.public].admin.system.common.updateUserPwd); // 修改密码
  router.get(`/api/${app.config.public}/admin/system/showByType/:dictType`, controller[app.config.public].admin.system.dictData.showByType); // 字典查询
  router.get(`/api/${app.config.public}/admin/system/menu/userMenu`, controller[app.config.public].admin.system.menu.userMenu); // 用户菜单
  router.put(`/api/${app.config.public}/admin/system/role/changeRoleStatus`, app.middleware.auth({
    put: 'system:role:changeRoleStatus'
  }), controller[app.config.public].admin.system.role.changeRoleStatus); // 修改角色状态


  /**
   * 系统模块
   */
  router.resources('user', `/api/${app.config.public}/admin/system/user`, app.middleware.auth({
    get: 'system:user:list',
    post: 'system:user:add',
    put: 'system:user:update',
    delete: 'system:user:delete'
  }), controller[app.config.public].admin.system.user); // 用户路由
  router.resources('role', `/api/${app.config.public}/admin/system/role`, app.middleware.auth({
    get: 'system:role:list',
    post: 'system:role:add',
    put: 'system:role:update',
    delete: 'system:role:delete'
  }), controller[app.config.public].admin.system.role); // 角色路由
  router.resources('menu', `/api/${app.config.public}/admin/system/menu`, app.middleware.auth({
    get: 'system:menu:list',
    post: 'system:menu:add',
    put: 'system:menu:update',
    delete: 'system:menu:delete'
  }), controller[app.config.public].admin.system.menu); // 菜单路由
  router.resources('department', `/api/${app.config.public}/admin/system/department`, app.middleware.auth({
    get: 'system:department:list',
    post: 'system:department:add',
    put: 'system:department:update',
    delete: 'system:department:delete'
  }), controller[app.config.public].admin.system.department); // 部门路由
  router.resources('dictType', `/api/${app.config.public}/admin/system/dictType`, app.middleware.auth({
    get: 'system:dictType:list',
    post: 'system:dictType:add',
    put: 'system:dictType:update',
    delete: 'system:dictType:delete'
  }), controller[app.config.public].admin.system.dictType); // 字典类型路由
  router.resources('dictData', `/api/${app.config.public}/admin/system/dictData`, app.middleware.auth({
    get: 'system:dictData:list',
    post: 'system:dictData:add',
    put: 'system:dictData:update',
    delete: 'system:dictData:delete'
  }), controller[app.config.public].admin.system.dictData); // 字典数据路由
  router.resources('notice', `/api/${app.config.public}/admin/system/notice`, app.middleware.auth({
    get: 'system:notice:list',
    post: 'system:notice:add',
    put: 'system:notice:update',
    delete: 'system:notice:delete'
  }), controller[app.config.public].admin.system.notice); // 字典数据路由

  /**
   * 博客模块特殊处理
   * */
  router.get(`/api/${app.config.public}/admin/blog/articleType/getAllType`, app.middleware.auth({
    get: 'blog:articleType:getAllType'
  }), controller[app.config.public].admin.blog.articleType.getAllType); // 获取所有类型

  // 房型
  router.resources('hotelType', `/api/${app.config.public}/admin/hotel/type`, app.middleware.auth({
    get: 'hotel:hotelType:list',
    post: 'hotel:hotelType:add',
    put: 'hotel:hotelType:update',
    delete: 'hotel:hotelType:delete'
  }), controller[app.config.public].admin.hotel.hotelType);

  // 楼层
  router.resources('floor', `/api/${app.config.public}/admin/hotel/floor`, app.middleware.auth({
    get: 'hotel:floor:list',
    post: 'hotel:floor:add',
    put: 'hotel:floor:update',
    delete: 'hotel:floor:delete'
  }), controller[app.config.public].admin.hotel.floor);

  // 房间
  router.resources('room', `/api/${app.config.public}/admin/hotel/room`, app.middleware.auth({
    get: 'hotel:room:list',
    post: 'hotel:room:add',
    put: 'hotel:room:update',
    delete: 'hotel:room:delete'
  }), controller[app.config.public].admin.hotel.room);

  // 订单
  router.resources('order', `/api/${app.config.public}/admin/hotel/order`, app.middleware.auth({
    get: 'hotel:order:list',
    post: 'hotel:order:add',
    put: 'hotel:order:update',
    delete: 'hotel:order:delete'
  }), controller[app.config.public].admin.hotel.order);

  // 根据status统计某个房间数量
  router.get(`/api/${app.config.public}/admin/hotel/roomCount`, controller[app.config.public].admin.hotel.roomStatus.getStatus);

  // 促销时间价格
  router.resources('dayPrice', `/api/${app.config.public}/admin/hotel/price/day`, app.middleware.auth({
    get: 'hotel:dayPrice:list',
    post: 'hotel:dayPrice:add',
    put: 'hotel:dayPrice:update',
    delete: 'hotel:dayPrice:delete'
  }), controller[app.config.public].admin.hotel.dayPrice);

  // 平时时间价格
  router.resources('weeksPrice', `/api/${app.config.public}/admin/hotel/price/weeks`, app.middleware.auth({
    get: 'hotel:weeksPrice:list',
    post: 'hotel:weeksPrice:add',
    put: 'hotel:weeksPrice:update',
    delete: 'hotel:weeksPrice:delete'
  }), controller[app.config.public].admin.hotel.weeksPrice);

  // 首页所有房间
  router.resources('homeRoom', `/api/${app.config.public}/admin/hotel/home/room`, app.middleware.auth({
    get: 'hotel:homeRoom:list',
  }), controller[app.config.public].admin.hotel.homeRoom);

  // 美食管理
  router.resources('foods', `/api/${app.config.public}/admin/food/foods`, app.middleware.auth({
    get: 'hotel:foods:list',
    post: 'hotel:foods:add',
    put: 'hotel:foods:update',
    delete: 'hotel:foods:delete'
  }), controller[app.config.public].admin.food.foods);

  // 美食评价管理
  router.resources('evaluates', `/api/${app.config.public}/admin/food/evaluates`, app.middleware.auth({
    get: 'hotel:evaluates:list',
    post: 'hotel:evaluates:add',
    put: 'hotel:evaluates:update',
    delete: 'hotel:evaluates:delete'
  }), controller[app.config.public].admin.food.evaluates);

  // 美食类别管理
  router.resources('types', `/api/${app.config.public}/admin/food/types`, app.middleware.auth({
    get: 'hotel:types:list',
    post: 'hotel:types:add',
    put: 'hotel:types:update',
    delete: 'hotel:types:delete'
  }), controller[app.config.public].admin.food.types);

  // 美食订单管理
  router.resources('orders', `/api/${app.config.public}/admin/food/orders`, app.middleware.auth({
    get: 'hotel:orders:list',
    post: 'hotel:orders:add',
    put: 'hotel:orders:update',
    delete: 'hotel:orders:delete'
  }), controller[app.config.public].admin.food.orders);

  /**
   * 博客模块
   */
  router.resources('article', `/api/${app.config.public}/admin/blog/article`, app.middleware.auth({
    get: 'blog:article:list',
    post: 'blog:article:add',
    put: 'blog:article:update',
    delete: 'blog:article:delete'
  }), controller[app.config.public].admin.blog.article); // 文章路由
  router.resources('articleType', `/api/${app.config.public}/admin/blog/articleType`, app.middleware.auth({
    get: 'blog:articleType:list',
    post: 'blog:articleType:add',
    put: 'blog:articleType:update',
    delete: 'blog:articleType:delete'
  }), controller[app.config.public].admin.blog.articleType); // 文章类型路由

  // socket.io
  io.of('/').route('notice', io.controller.notice.ping);
};