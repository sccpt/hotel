module.exports = app => {
  const { router, controller } = app;

  /**
   * web前端模块
   */
  router.get(`/api/${app.config.public}/front/system/getInfo`, controller[app.config.public].front.system.user.getInfo); // 获取用户信息
  router.get(`/api/${app.config.public}/front/blog/articleType/getAllType`, controller[app.config.public].front.blog.articleType.getAllType); // 获取所有类型
  router.get(`/api/${app.config.public}/front/blog/getArticle`, controller[app.config.public].front.blog.article.getArticle); // 获取文章
  router.get(`/api/${app.config.public}/front/blog/getArticleById/:id`, controller[app.config.public].front.blog.article.getArticleById); // 获取文章详情
  router.get(`/api/${app.config.public}/front/blog/friendlyLink/getFriendlyLink`, controller[app.config.public].front.blog.friendlyLink.getAllLink); // 获取文章
};