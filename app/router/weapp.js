module.exports = app => {
    // 小程序接口
    const { router, controller } = app;
    const xmlparse = app.middleware.xmlparse();

    router.post("/weapp/login", controller.weapp.login.login);
    router.get("/weapp/home", controller.weapp.home.index);
    router.get("/weapp/news", controller.weapp.news.getList);
    router.get("/weapp/news/details/:id", controller.weapp.news.getDetails);
    router.get("/weapp/about", controller.weapp.about.get);
    router.get("/weapp/room", controller.weapp.room.getList);
    router.get("/weapp/room/details/:id", controller.weapp.room.show);
    router.get("/weapp/order/buy", controller.weapp.room.getTypeOrder);
    router.post("/weapp/order/create", controller.weapp.order.create);
    router.get("/weapp/order/list", controller.weapp.order.index);
    router.post("/weapp/order/cancel", controller.weapp.order.cancel);
    router.get("/weapp/order/details/:id", controller.weapp.order.show);
    router.get("/weapp/order/statistics", controller.weapp.order.statistics);
    router.post("/weapp/order/more", controller.weapp.order.getMore);
    // 点餐
    router.get("/weapp/food/list", controller.weapp.food.getList);
    router.get("/weapp/food/types", controller.weapp.food.getType);
    router.get("/weapp/food/details/:id", controller.weapp.food.getDetails);
    router.get("/weapp/food/more", controller.weapp.food.getFood);
    router.post("/weapp/food/create", controller.weapp.food.create);
    router.get("/weapp/food/orders", controller.weapp.food.getOrder);
    router.post("/weapp/food/order/cancel", controller.weapp.food.cancel);
    router.get("/weapp/food/order/details/:id", controller.weapp.food.orderShow);
    router.post("/weapp/food/eval/create", controller.weapp.food.evalCreate);
    router.get("/weapp/food/eval/my", controller.weapp.food.evalShow);
    // 支付
    router.post("/weapp/pay/unifiedorder", controller.weapp.pay.unifiedorder);
    app.post('/weapp/pay/callback', xmlparse, controller.weapp.pay.wechatNotify);
};