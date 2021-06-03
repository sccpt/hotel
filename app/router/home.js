module.exports = app => {
    const { router, controller } = app;

    // 首页
    router.get("/", controller.page.home.getDataForIndexPage);

    // page页面
    router.get("/news/list/:id.html", controller.page.news.index);
    router.get("/news/details/:id.html", controller.page.news.show);

    router.get("/food/list/:id.html", controller.page.food.index);
    router.get("/food/details/:id.html", controller.page.food.show);

    router.get("/photo/list/:id.html", controller.page.photo.index);
    router.get("/photo/details/:id.html", controller.page.photo.show);

    router.get("/hotel/details/:id.html", controller.page.hotel.show);

    router.get("/room/list/:id.html", controller.page.room.index);
    router.get("/room/details/:id.html", controller.page.room.show);
}