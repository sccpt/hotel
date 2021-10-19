<h1 align="center">Hotel Manage</h1>

<div align="center">

开箱即用的酒店管理系统。

[![antd](https://img.shields.io/badge/antd-^4.0.0-blue.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![GitHub issues](https://img.shields.io/github/issues/zuiidea/antd-admin.svg?style=flat-square)](https://github.com/zuiidea/antd-admin/issues)
[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)
![Travis (.org)](https://img.shields.io/travis/zuiidea/antd-admin.svg)



![](http://www.yjnbs.com/hotel/p1.png)

</div>

## 演示网站

前台网站：http://211.149.215.153:8001/

后台登录：http://211.149.215.153:8001/admin/index.html

账户：admin  密码：123456

备注：服务器即将到期，如果您访问不了了就代表服务器已经到期！


## 技术栈

后端技术栈：egg.js + mysql + sequelize + jwt + redis + socket.io 等

前端技术栈：React + Ant Design Pro + Umi 等。前端源码，暂不提供开源！

网站：bootstrap 响应式

微信小程序：vant-weapp

### 环境

node版本8以上

MySQL数据库

Redis

## 使用

```bash
git clone https://gitee.com/scyurui/hotel.git
// 或者 git clone https://github.com/sccpt/hotel.git
cd hotel
npm install
```
修改config/config.default.js下自己的数据库用户名和密码

修改config/config.default.js下Redis的相关配置信息

修改config/config.default.js下weapp的相关配置信息（用于微信小程序鉴权、商户支付等）

创建数据库hotel

在hotel数据库下导入项目根目录下hotel.sql文件

运行项目

> npm run dev

浏览器打开 http://127.0.0.1:7001/admin/index.html

登录账号：admin，密码： 123456

更多使用说明请移步：https://eggjs.org/zh-cn/intro/quickstart.html

## 后台功能

```bash
├─ 登录
|	├─ 登录退出
├─ 首页
|	├─ 实时房间动态页
├─ 酒店管理
|	├─ 房间管理--增删改查
|	├─ 楼层管理--增删改查
|	├─ 房型管理--增删改查
|	├─ 订单管理--增删改查
|	├─ 价格管理--增删改查
|	├─ 促销管理--增删改查
|	├─ 通知信息--删查
├─ 点餐系统
|	├─ 商品管理--增删改查
|	├─ 订单管理--删改查
|	├─ 分类管理--增删改查
|	├─ 评价管理--删查
├─ 内容管理
|	├─ 文章管理--增删改查
|	├─ 栏目管理--增删改查
├─ 系统管理
|	├─ 用户管理--增删改查
|	├─ 角色管理--增删改查
|	├─ 菜单管理--增删改查
|	├─ 部门管理--增删改查
├─ 其它功能
|	├─ 订单30分钟未支付自动取消
|	├─ 新订单、取消订单、订餐等socket实时推送
|	├─ 微信支付
|	├─ 微信支付成功回调
|	├─ 订单取消微信退款
```

## 网站功能

```bash
├─ 网站首页
|	├─ 推荐房型
|	├─ 促销动态
|	├─ 照片图库
|	├─ 美食商品
|	├─ 联系我们
├─ 房型列表
|	├─ 列表页
|	├─ 详情页
├─ 客房预定
|	├─ 介绍
├─ 美食商品
|	├─ 列表页
|	├─ 详情页
├─ 关于我们
|	├─ 介绍
├─ 联系我们
|	├─ 介绍
├─ 促销动态
|	├─ 列表页
|	├─ 详情页
```

## 微信小程序功能

```bash
├─ 首页
|	├─ 房型列表
|	├─ 在线预定
|	├─ 填写订单
|	├─ 多个房间预定
|	├─ 订单明细
|	├─ 提交订单
|	├─ 在线支付
|	├─ 取消订单
├─ 促销
|	├─ 列表
|	├─ 详情
├─ 订餐
|	├─ 自助点餐中心
|	├─ 购物车
|	├─ 下单中心
|	├─ 订餐与订房订单号绑定
|	├─ 就餐时间与入住时间段绑定
|	├─ 订餐成功
|	├─ 订餐成功自动增加订房订单“额外消费”栏金额，退房的时候酒店服务台现场进行结算
├─ 关于
|	├─ 联系酒店
|	├─ 酒店介绍
├─ 我的
|	├─ 我的订单
|	|	├─ 订房订单
|	|	|	├─ 全部
|	|	|	├─ 待支付
|	|	|	├─ 待入住
|	|	|	├─ 已完成
|	|	├─ 订餐订单
|	|	|	├─ 全部
|	|	|	├─ 已订餐
|	|	|	├─ 备餐中
|	|	|	├─ 已完成
|	|	├─ 我的评价
|	|	|	├─ 针对订餐的评价
```

备注：

1，订餐与订房订单绑定，没有订房的客人不能订餐
2，就餐时间与订房入住时间段绑定，只能在房间预定的时间段内就餐
3，订餐不提供在线支付，由于已绑定了订房订单。订餐下单的时候自动在订房订单“额外消费”字段栏增加消费金额，待退房的时候酒店服务台现场结算。
4，订房订单提供在线支付功能，并且30分钟未支付，自动取消订单。订单页，实时显示剩余支付时间。
5，订餐成功完成后，客人可在线评论。后台可删除评论。


### 目录结构

```bash
hotel-manage
├─ app
|	├─ controller			// 用于解析用户的输入，处理后返回相应的结果
|	├─ extend				// 用于框架的扩展
|	├─ io				    // socket.io
|	├─ middleware			// 用于编写中间件
|	├─ model				// 用于放置领域模型
|	├─ public				// 用于放置静态资源
|	├─ rules				// 参数校验文件
|	├─ schedule				// 用于定时任务，可选，具体参见定时任务
|	├─ service				// 用于编写业务逻辑层，可选，建议使用
|	├─ utils				// 工具文件
|	├─ view				    // 网站模板
|	├─ router.js		    // 用于配置 URL 路由规则
├─ config
|	├─ config.default.js	// 用于编写配置文件
|	├─ plugin.js			// 用于配置需要加载的插件
├─ database
|	├─ migrations			// 数据库迁移文件
|	├─ seeders				// 种子文件
|	├─ config.json				// sequelize 配置文件
├─ logs						// 日志文件
├─ run
├─ test
├─ typings
├─ www						// 前端打包文件以及一些静态文件
├─ weapp					// 微信小程序源码
...
```

## 界面截图

**后台**

![room](http://www.yjnbs.com/hotel/p2.png)

![order](http://www.yjnbs.com/hotel/p3.png)

![food_order](http://www.yjnbs.com/hotel/p4.png)

**网站**

![home](http://www.yjnbs.com/hotel/p9.png)

**微信小程序**

![wx_home](http://www.yjnbs.com/hotel/p5.png)

![wx_order](http://www.yjnbs.com/hotel/p6.png)

![wx_food](http://www.yjnbs.com/hotel/p7.png)

![wx_my](http://www.yjnbs.com/hotel/p8.png)


## 感谢支持

如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
