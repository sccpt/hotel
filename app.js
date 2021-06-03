'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
    app.beforeStart(async () => {
        const ctx = app.createAnonymousContext();
        // 初始化延迟任务
        app.initDelayTask();

        // 创建订单过期自动取消任务
        app.registerTaskHandler('cancelOrder', async (id) => {
            const order = await ctx.service.v1.admin.hotel.order.findByPk(id);
            if (order && order.status == 2 && order.pay_status == 0) {
                const query = {
                    updatedAt: new Date(),
                    updatedBy: 'admin',
                    uid: order.uid,
                    order_id: order.order_id,
                    id,
                };
                await ctx.service.weapp.order.cancel(query);
                console.log(`过期自动取消订单: id=${id}`);
            }
        });
    });
};
