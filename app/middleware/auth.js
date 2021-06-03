module.exports = (options, app) => {
  return async function(ctx, next) {
    if (ctx.state.user.id === 1) { // 超级管理员权限
      await next();
    } else {
      if (ctx.method === 'GET' && !ctx.state.permissions.includes(options.get)) {
        ctx.throw(500, '没有权限！');
      } else if (ctx.method === 'POST' && !ctx.state.permissions.includes(options.post)) {
        ctx.throw(500, '没有权限！');
      }  else if (ctx.method === 'PUT' && !ctx.state.permissions.includes(options.put)) {
        ctx.throw(500, '没有权限！');
      }  else if (ctx.method === 'DELETE' && !ctx.state.permissions.includes(options.delete)) {
        ctx.throw(500, '没有权限！');
      } else {
        await next();
      }
    }
  };
};