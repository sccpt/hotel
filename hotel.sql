
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `hotel`
--
CREATE DATABASE IF NOT EXISTS `hotel` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `hotel`;

-- --------------------------------------------------------

--
-- 表的结构 `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL COMMENT '用户id',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `subTitle` varchar(255) NOT NULL COMMENT '副标题',
  `type` varchar(255) NOT NULL COMMENT '类型',
  `isTop` int(11) DEFAULT '0' COMMENT '首页推荐',
  `photo` varchar(255) DEFAULT NULL COMMENT '封面图片',
  `photos` varchar(255) DEFAULT NULL COMMENT '更多图片',
  `hot` int(11) DEFAULT '0' COMMENT '热度',
  `content` text NOT NULL COMMENT '内容',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `articles`
--

INSERT INTO `articles` (`id`, `userId`, `title`, `subTitle`, `type`, `isTop`, `photo`, `photos`, `hot`, `content`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(9, 1, '关于我们', '关于我们', 'hotel', 0, NULL, NULL, 0, '<p>关于我们关于我们</p>', '2021-04-22 11:21:02', 'admin', '2021-04-26 14:41:51', 'admin'),
(10, 1, '联系我们', '联系我们', 'hotel', 0, NULL, NULL, 0, '<p>联系我们联系我们</p>', '2021-04-22 11:22:19', 'admin', NULL, NULL),
(13, 1, '客房预定', '客房预定', 'hotel', 0, NULL, NULL, 0, '客房预定客房预定客房预定', '2021-04-26 14:43:40', 'admin', NULL, NULL),
(14, 1, '五一促销活动订酒店特惠', '五一促销活动订酒店特惠', 'news', 1, '/uploads/1/CHP_2021042617434963.jpg', NULL, 0, '<p><span style=\"font-size:18px\"><span style=\"color:#333333\">海外网4月26日电</span></span>国务院台湾事务办公室发言人马晓光26日就涉台热点问题回答记者提问。</p><p>问：蔡英文及赖清德25日在所谓“海内外台湾国是会议”发表挑衅言论，声称要让“台湾成为正常化国家”。对此有何评论?</p><p>答：民进党当局操弄和鼓噪谋“独”议题，大肆散播“台独”言论，进一步暴露了他们伪善意、真“台独”的本质，撕下了他们所谓“缓和两岸关系”的面具。</p><p></p><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"/uploads/1/CHP_2021042617443375.jpg\"/></div><p></p><p>世界上只有一个中国，台湾是中国的一部分，永远不可能从中国分裂出去。涉及中国主权和领土完整的问题，必须由全中国人民决定。</p><p>民进党当局和“台独”分裂势力的丑恶表演，再次证明他们顽固进行谋“独”挑衅是台海和平稳定的最大乱源，是威胁台湾同胞利益福祉的毒瘤，只会给台湾同胞带来深重灾难。这充分说明我们坚决遏制和打击“台独”分裂活动，就是维护台海和平稳定，维护两岸同胞共同利益。</p><p></p><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"/uploads/1/CHP_2021042617444193.jpg\"/></div><p></p><p>我们正告民进党当局和“台独”分裂势力，不要错判形势。顽固坚持“台独”立场，幻想挟洋自重，谋“独”挑衅，终将遭到可耻的失败和历史的审判。</p><p>台湾前途在于国家统一，台湾同胞福祉系于国家统一。这是任何人、任何势力都无法改变的历史大势。</p>', '2021-04-26 17:44:44', 'admin', '2021-04-26 17:45:19', 'admin'),
(15, 1, '美欧相继驱逐多名俄外交官，外交部：中俄将继续相互支持', '美欧相继驱逐多名俄外交官，外交部：中俄将继续相互支持', 'news', 1, '/uploads/1/CHP_2021042617504322.jpg', NULL, 0, '<p>4月26日，外交部发言人汪文斌主持例行记者会。</p><p>有记者提问，近期美国对俄罗斯出台大规模制裁，驱逐10名俄罗斯外交官，一些欧洲国家也相继驱逐多名俄外交官，俄方采取了必要的回应措施。普京总统日前在国情咨文中强调，对俄发动挑衅者必将为自己的行动追悔莫及，俄的红线不容践踏，请问中方对此有何评价？</p><p></p><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"http://pics5.baidu.com/feed/d439b6003af33a872b8a662f266f78305243b5d8.jpeg?token=83270c271dbc2b734da9676ea35b9eae\"/></div><p></p><p>汪文斌表示，中方历来主张国与国在相互尊重的基础上，通过平等协商妥善解决分歧。我们反对动辄使用单边制裁或以制裁相威胁，这是强权、霸凌的做法，不得人心，日益遭到抵制和反对。</p><p>汪文斌指出，当前全球新冠肺炎疫情形势依然十分严峻，面对人类面临的共同困难，国际社会应团结协作共克时艰，携手应对新威胁和新挑战，共同助力全球经济早日复苏，促进国际和平与安全。中俄是新时代全面战略协作伙伴关系，在维护各自主权、安全和发展利益上，双方将继续相互理解、相互支持。</p>', '2021-04-26 17:50:57', 'admin', '2021-04-26 17:51:03', 'admin'),
(16, 1, '熟蛋返生论文作者称曾和熟绿豆对话', '熟蛋返生论文作者称曾和熟绿豆对话', 'news', 1, '/uploads/1/CHP_2021042617513158.jpg', NULL, 0, '<p>4月26日，外交部发言人汪文斌主持例行记者会。</p><p>有记者提问，近期美国对俄罗斯出台大规模制裁，驱逐10名俄罗斯外交官，一些欧洲国家也相继驱逐多名俄外交官，俄方采取了必要的回应措施。普京总统日前在国情咨文中强调，对俄发动挑衅者必将为自己的行动追悔莫及，俄的红线不容践踏，请问中方对此有何评价？</p><p></p><div class=\"media-wrap image-wrap\"><img class=\"media-wrap image-wrap\" src=\"http://pics5.baidu.com/feed/d439b6003af33a872b8a662f266f78305243b5d8.jpeg?token=83270c271dbc2b734da9676ea35b9eae\"/></div><p></p><p>汪文斌表示，中方历来主张国与国在相互尊重的基础上，通过平等协商妥善解决分歧。我们反对动辄使用单边制裁或以制裁相威胁，这是强权、霸凌的做法，不得人心，日益遭到抵制和反对。</p><p>汪文斌指出，当前全球新冠肺炎疫情形势依然十分严峻，面对人类面临的共同困难，国际社会应团结协作共克时艰，携手应对新威胁和新挑战，共同助力全球经济早日复苏，促进国际和平与安全。中俄是新时代全面战略协作伙伴关系，在维护各自主权、安全和发展利益上，双方将继续相互理解、相互支持。</p>', '2021-04-26 17:51:39', 'admin', '2021-04-26 17:57:23', 'admin'),
(17, 1, '美景1', '美景1', 'photo', 1, '/uploads/1/CHP_2021042617521278.jpg', '/uploads/1/CHP_2021042617521530.jpg,/uploads/1/CHP_2021042617521846.jpg,/uploads/1/CHP_2021042617522165.jpg,/uploads/1/CHP_2021042617522462.jpg,/uploads/1/CHP_2021042617522644.jpg,/uploads/1/CHP_2021042617522821.jpg,/uploads/1/CHP_2021042617523064.jpg', 0, '<p>美景1</p>', '2021-04-26 17:52:44', 'admin', '2021-06-02 14:57:14', 'admin'),
(18, 1, '美景2', '美景2', 'photo', 1, '/uploads/1/CHP_2021042617530183.jpg', '/uploads/1/CHP_2021042617530441.jpg,/uploads/1/CHP_2021042617530650.jpg,/uploads/1/CHP_2021042617530867.jpg,/uploads/1/CHP_2021042617531097.jpg', 0, '<p>美景2</p>', '2021-04-26 17:53:13', 'admin', '2021-06-02 14:56:58', 'admin'),
(19, 1, '美景3', '美景3', 'photo', 1, '/uploads/1/CHP_2021042617532956.jpg', '/uploads/1/CHP_2021042617533862.jpg,/uploads/1/CHP_2021042617534021.jpg,/uploads/1/CHP_2021042617534243.jpg', 0, '<p>美景3</p>', '2021-04-26 17:53:44', 'admin', '2021-06-02 14:56:47', 'admin'),
(20, 1, 'banner1', 'banner1', 'banner', 0, '/uploads/1/CHP_2021050315584438.jpg', NULL, 0, '<p>banner1</p>', '2021-05-03 15:58:48', 'admin', NULL, NULL),
(21, 1, 'banner2', 'banner2', 'banner', 0, '/uploads/1/CHP_2021050315590351.jpg', NULL, 0, '<p>banner2</p>', '2021-05-03 15:59:07', 'admin', NULL, NULL),
(22, 1, 'banner3', 'banner3', 'banner', 0, '/uploads/1/CHP_2021050316001288.jpg', NULL, 0, '<p>banner3</p>', '2021-05-03 16:00:16', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `article_types`
--

CREATE TABLE `article_types` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL COMMENT '用户id',
  `title` varchar(255) NOT NULL COMMENT '名称',
  `key` varchar(255) NOT NULL,
  `orderNum` int(11) NOT NULL COMMENT '显示排序',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `article_types`
--

INSERT INTO `article_types` (`id`, `userId`, `title`, `key`, `orderNum`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(3, 1, '美食商品', 'food', 2, '美食商品', '2021-01-22 16:52:31', 'admin', '2021-04-22 11:15:44', 'admin'),
(4, 1, '促销动态', 'news', 3, '促销动态', '2021-01-23 09:33:16', 'admin', '2021-04-22 11:16:10', 'admin'),
(7, 1, '照片图库', 'photo', 4, '照片图库', '2021-04-22 11:17:06', 'admin', NULL, NULL),
(8, 1, '酒店信息', 'hotel', 5, '酒店信息', '2021-04-22 11:18:57', 'admin', NULL, NULL),
(10, 1, '小程序banner', 'banner', 6, '微信小程序banner图', '2021-05-02 14:26:17', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `departments`
--

CREATE TABLE `departments` (
  `deptId` int(11) NOT NULL,
  `parentId` int(11) NOT NULL COMMENT '父Id',
  `deptName` varchar(255) NOT NULL COMMENT '部门名称',
  `orderNum` int(11) NOT NULL COMMENT '显示顺序',
  `status` varchar(255) DEFAULT '1' COMMENT '部门状态（1正常 0停用）',
  `isDelete` varchar(255) DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `departments`
--

INSERT INTO `departments` (`deptId`, `parentId`, `deptName`, `orderNum`, `status`, `isDelete`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 0, '总部', 1, '1', '0', '2021-01-08 12:04:02', 'admin', NULL, NULL),
(2, 1, '测试部门', 1, '1', '0', '2021-01-08 12:04:02', 'admin', NULL, NULL),
(5, 2, '测试一部', 2, '1', '0', '2021-02-02 17:41:01', 'test', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `dict_datas`
--

CREATE TABLE `dict_datas` (
  `id` int(11) NOT NULL,
  `dictSort` int(11) NOT NULL COMMENT '字典排序',
  `dictLabel` varchar(255) NOT NULL COMMENT '字典标签',
  `dictValue` varchar(255) NOT NULL COMMENT '字典键值',
  `dictType` varchar(255) NOT NULL COMMENT '字典类型',
  `cssClass` varchar(255) DEFAULT NULL COMMENT '样式属性（其他样式扩展）',
  `listClass` varchar(255) DEFAULT NULL COMMENT '表格回显样式',
  `isDefault` varchar(255) DEFAULT 'Y' COMMENT '是否默认（Y是 N否）',
  `status` varchar(255) DEFAULT '1' COMMENT '菜单状态（1正常 0停用）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `dict_datas`
--

INSERT INTO `dict_datas` (`id`, `dictSort`, `dictLabel`, `dictValue`, `dictType`, `cssClass`, `listClass`, `isDefault`, `status`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 1, '正常', '1', 'sys_show_hide', NULL, NULL, 'Y', '1', '正常', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:27', 'admin'),
(2, 2, '停用', '0', 'sys_show_hide', NULL, NULL, 'Y', '1', '停用', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:29', 'admin'),
(3, 1, '正常', '1', 'sys_normal_disable', NULL, NULL, 'Y', '1', '正常', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:36', 'admin'),
(4, 2, '停用', '0', 'sys_normal_disable', NULL, NULL, 'Y', '1', '停用', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:39', 'admin'),
(5, 2, '男', '1', 'sys_user_sex', NULL, NULL, 'Y', '1', '男', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:46', 'admin'),
(6, 1, '女', '0', 'sys_user_sex', NULL, NULL, 'Y', '1', '女', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:07:44', 'admin'),
(7, 1, '公告', '1', 'sys_notice_type', NULL, NULL, 'Y', '1', '公告', '2021-01-05 13:49:04', 'admin', '2021-01-05 15:07:17', 'admin'),
(8, 2, '通知', '2', 'sys_notice_type', NULL, NULL, 'Y', '1', '通知', '2021-01-05 13:49:18', 'admin', '2021-01-05 15:07:20', 'admin'),
(16, 1, '启用', '1', 'sys_notice_status', NULL, NULL, 'Y', '1', '启用', '2021-01-05 14:43:51', 'admin', '2021-01-05 15:07:09', 'admin'),
(17, 2, '停用', '2', 'sys_notice_status', NULL, NULL, 'Y', '1', '停用', '2021-01-05 14:44:07', 'admin', '2021-01-05 15:07:12', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `dict_types`
--

CREATE TABLE `dict_types` (
  `id` int(11) NOT NULL,
  `dictName` varchar(255) NOT NULL COMMENT '字典名称',
  `dictType` varchar(255) NOT NULL COMMENT '字典类型',
  `status` varchar(255) DEFAULT '1' COMMENT '菜单状态（1正常 2停用）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `dict_types`
--

INSERT INTO `dict_types` (`id`, `dictName`, `dictType`, `status`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, '显示状态', 'sys_show_hide', '1', '显示状态', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:06:44', 'admin'),
(2, '状态数据', 'sys_normal_disable', '1', '状态数据', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:06:47', 'admin'),
(3, '性别', 'sys_user_sex', '1', '性别', '2020-11-25 15:49:13', 'admin', '2021-01-05 15:06:49', 'admin'),
(4, '公告类型', 'sys_notice_type', '1', '公告类型', '2021-01-05 13:47:27', 'admin', '2021-01-05 15:06:41', 'admin'),
(5, '公告状态', 'sys_notice_status', '1', '公告状态', '2021-01-05 13:48:00', 'admin', '2021-01-05 15:06:37', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL COMMENT '类型',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `content` text NOT NULL COMMENT '内容',
  `isTop` int(11) DEFAULT '0' COMMENT '推荐（0不，1是）',
  `price` int(11) NOT NULL DEFAULT '0' COMMENT '价格',
  `info` varchar(255) DEFAULT NULL COMMENT '剪短描述',
  `sales` int(11) DEFAULT '0' COMMENT '销量',
  `photo` varchar(255) DEFAULT NULL COMMENT '封面图片',
  `photos` varchar(255) DEFAULT NULL COMMENT '更多图片',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `foods`
--

INSERT INTO `foods` (`id`, `type_id`, `title`, `content`, `isTop`, `price`, `info`, `sales`, `photo`, `photos`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 1, '回锅肉', '<p>好吃的回锅肉</p>', 1, 20, '好吃的回锅肉', 12, '/uploads/1/CHP_2021051814173873.jpg', '/uploads/1/CHP_2021051814174197.jpg,/uploads/1/CHP_2021051814174327.jpg', '2021-05-18 14:17:50', 'admin', '2021-05-18 14:19:51', 'admin'),
(2, 1, '火爆肥肠', '<p>好吃得很</p>', 1, 12, '好吃得很', 13, '/uploads/1/CHP_2021051814210470.jpg', '/uploads/1/CHP_2021051814210654.jpg,/uploads/1/CHP_2021051814210891.jpg', '2021-05-18 14:21:12', 'admin', '2021-05-18 14:22:03', 'admin'),
(3, 1, '火爆腰花', '<p>好吃得很</p>', 1, 23, '好吃得很', 12, '/uploads/1/CHP_2021051814214057.jpg', '/uploads/1/CHP_2021051814214274.jpg,/uploads/1/CHP_2021051814214476.jpg', '2021-05-18 14:21:47', 'admin', '2021-05-18 14:22:21', 'admin'),
(4, 3, '米饭一份', '<p>好吃得很</p>', 0, 2, '好吃得很', 0, '/uploads/1/CHP_2021051814251087.jpg', '/uploads/1/CHP_2021051814251275.jpg,/uploads/1/CHP_2021051814251422.jpg', '2021-05-18 14:25:15', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `food_evaluates`
--

CREATE TABLE `food_evaluates` (
  `id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL COMMENT '商品id',
  `uid` varchar(255) NOT NULL COMMENT 'openid',
  `good` int(11) NOT NULL DEFAULT '1' COMMENT '好评（0，差评，1，好评）',
  `name` varchar(255) NOT NULL COMMENT '用户呢称',
  `content` varchar(255) NOT NULL COMMENT '内容',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `food_evaluates`
--

INSERT INTO `food_evaluates` (`id`, `food_id`, `uid`, `good`, `name`, `content`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 2, 'oL9Fw1tyk3nKp58-fefeae4545', 1, '宇瑞', '很好吃的', '2021-05-26 15:55:21', '宇瑞', NULL, NULL),
(2, 1, 'oL9Fw1tyk3nKp58-fefeae4545', 1, '宇瑞', '很牛逼的', '2021-05-26 15:55:21', '宇瑞', NULL, NULL),
(3, 3, 'oL9Fw1tyk3nKp58-fefeae4545', 1, '宇瑞', '默认评价', '2021-05-26 15:55:21', '宇瑞', NULL, NULL),
(4, 4, 'oL9Fw1tyk3nKp58-fefeae4545', 1, '宇瑞', '默认评价', '2021-05-26 15:55:21', '宇瑞', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `food_mids`
--

CREATE TABLE `food_mids` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL COMMENT '订单id',
  `food_id` int(11) NOT NULL COMMENT '商品id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `food_mids`
--

INSERT INTO `food_mids` (`id`, `order_id`, `food_id`) VALUES
(95, 15, 2),
(96, 15, 1),
(97, 15, 3),
(98, 15, 4),
(99, 15, 3),
(100, 15, 3),
(101, 15, 1),
(110, 18, 2),
(111, 18, 1),
(112, 18, 3),
(113, 18, 4),
(114, 18, 3),
(115, 18, 3),
(116, 18, 1),
(117, 19, 3),
(118, 19, 4),
(119, 19, 1);

-- --------------------------------------------------------

--
-- 表的结构 `food_orders`
--

CREATE TABLE `food_orders` (
  `id` int(11) NOT NULL,
  `order_id` varchar(50) NOT NULL COMMENT '订单id',
  `uid` varchar(255) NOT NULL COMMENT 'openid',
  `room_order_id` varchar(50) NOT NULL COMMENT '房间预定的订单编号',
  `eat_time` datetime NOT NULL COMMENT '用餐时间',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '状态（0，已订餐，1，备餐中，2，已完成，3，取消订单）',
  `price` int(11) NOT NULL COMMENT '总金额',
  `eva_status` int(11) DEFAULT '0' COMMENT '评价状态（0，未评价，1，已评价）',
  `food_ids` varchar(255) NOT NULL COMMENT '商品的ids，用于订单详情',
  `people` varchar(255) DEFAULT NULL COMMENT '预定人',
  `phone` varchar(255) DEFAULT NULL COMMENT '预定人电话',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `food_orders`
--

INSERT INTO `food_orders` (`id`, `order_id`, `uid`, `room_order_id`, `eat_time`, `status`, `price`, `eva_status`, `food_ids`, `people`, `phone`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(15, '2021060210420353', 'oL9Fw1tyk3nKp58-F9cl8XOuzPnQ', '2021060210410146', '2021-06-17 11:00:00', 2, 123, 0, '2,1,3,4,3,3,1', NULL, NULL, '2021-06-02 10:42:01', NULL, NULL, NULL),
(18, '2021060217202487', 'oL9Fw1tyk3nKp58-F9cl8XOuzPnQ', '2021060217155723', '2021-06-09 03:03:00', 0, 123, 0, '2,1,3,4,3,3,1', NULL, NULL, '2021-06-02 17:20:24', NULL, NULL, NULL),
(19, '2021060310094757', 'oL9Fw1tyk3nKp58-F9cl8XOuzPnQ', '2021060217155723', '2021-06-08 12:00:00', 0, 45, 0, '3,4,1', NULL, NULL, '2021-06-03 10:09:47', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `food_types`
--

CREATE TABLE `food_types` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL COMMENT '名称',
  `orderNum` int(11) DEFAULT '0' COMMENT '显示排序',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `food_types`
--

INSERT INTO `food_types` (`id`, `title`, `orderNum`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, '荤菜', 1, NULL, '2021-05-18 14:14:21', 'admin', NULL, NULL),
(2, '素菜', 2, NULL, '2021-05-18 14:14:31', 'admin', NULL, NULL),
(3, '米饭', 3, NULL, '2021-05-18 14:14:41', 'admin', NULL, NULL),
(4, '面食', 4, NULL, '2021-05-18 14:14:58', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `friendly_links`
--

CREATE TABLE `friendly_links` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL COMMENT '用户id',
  `title` varchar(255) NOT NULL COMMENT '名称',
  `url` varchar(255) NOT NULL COMMENT '链接',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `friendly_links`
--

INSERT INTO `friendly_links` (`id`, `userId`, `title`, `url`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(3, 1, 'baidu', 'https://www.baidu.com/?tn=78000241_22_hao_pg', 'baidu', '2021-01-23 13:35:18', 'admin', '2021-01-23 14:08:40', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `parentId` int(11) NOT NULL COMMENT '父Id',
  `title` varchar(255) NOT NULL COMMENT '菜单名称',
  `path` varchar(255) DEFAULT NULL COMMENT '菜单路径',
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `component` varchar(255) DEFAULT NULL COMMENT '组件路径',
  `isFrame` varchar(255) DEFAULT '0' COMMENT '是否为外链（1是 0否）',
  `menuType` varchar(255) DEFAULT 'M' COMMENT '菜单类型（M目录 C菜单 F按钮）',
  `visible` varchar(255) DEFAULT '1' COMMENT '菜单显示状态（1显示 0隐藏）',
  `orderNum` int(11) NOT NULL COMMENT '显示顺序',
  `status` varchar(255) DEFAULT '1' COMMENT '菜单状态（1正常 0停用）',
  `perms` varchar(255) DEFAULT NULL COMMENT '权限标识',
  `icon` varchar(255) DEFAULT '#' COMMENT '图标',
  `isDelete` varchar(255) DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `menus`
--

INSERT INTO `menus` (`id`, `parentId`, `title`, `path`, `name`, `component`, `isFrame`, `menuType`, `visible`, `orderNum`, `status`, `perms`, `icon`, `isDelete`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 0, '首页', '/layout/home', 'Home', 'Home', '1', 'C', '1', 1, '1', '', 'nav-home', '0', NULL, '2020-11-25 15:49:13', 'admin', '2021-03-25 10:12:58', 'admin'),
(2, 0, '系统管理', '/system', 'Layout', 'Layout', '1', 'M', '1', 20, '1', '', 'system', '0', NULL, '2020-11-25 15:49:13', 'admin', '2021-01-05 15:08:36', 'admin'),
(3, 2, '用户中心', 'user', 'User', 'User', '1', 'C', '1', 1, '1', '', '#', '0', NULL, '2020-11-25 15:49:13', 'admin', '2021-01-05 15:10:51', 'admin'),
(4, 2, '角色管理', 'role', 'Role', 'Role', '1', 'C', '1', 2, '1', '', '#', '0', NULL, '2020-11-25 15:49:13', 'admin', '2021-01-05 15:11:01', 'admin'),
(5, 2, '菜单管理', 'menu', 'Menu', 'Menu', '1', 'C', '1', 3, '1', '', '#', '0', NULL, '2020-11-25 15:49:13', 'admin', '2021-01-05 15:10:57', 'admin'),
(6, 2, '部门管理', 'dept', 'Dept', 'Dept', '1', 'C', '1', 4, '1', '', '#', '0', NULL, '2020-11-25 15:49:13', 'admin', '2021-01-05 15:11:06', 'admin'),
(7, 2, '字典管理', 'dict', 'Dict', 'Dict', '1', 'C', '1', 6, '1', '', '#', '0', NULL, '2020-11-25 15:49:13', 'admin', '2021-01-05 15:11:11', 'admin'),
(8, 0, '博客管理', '/article', 'Layout', 'Layout', '1', 'M', '1', 10, '1', NULL, 'article', '0', NULL, '2021-01-04 15:52:39', 'admin', '2021-01-06 14:57:16', 'admin'),
(9, 8, '文章列表', 'articleList', 'ArticleList', 'ArticleList', '1', 'C', '1', 2, '1', NULL, '#', '0', NULL, '2021-01-04 16:09:36', 'admin', '2021-01-25 14:07:08', 'admin'),
(13, 3, '查询', NULL, NULL, NULL, '1', 'F', '0', 1, '1', 'system:user:list', '#', '0', NULL, '2021-01-04 16:46:28', 'admin', '2021-01-23 09:58:27', 'admin'),
(14, 3, '新增', NULL, NULL, NULL, '1', 'F', '0', 2, '1', 'system:user:add', '#', '0', NULL, '2021-01-04 16:47:31', 'admin', '2021-01-23 09:58:36', 'admin'),
(15, 3, '修改', NULL, NULL, NULL, '1', 'F', '0', 3, '1', 'system:user:update', '#', '0', NULL, '2021-01-04 16:47:51', 'admin', '2021-01-23 09:58:40', 'admin'),
(16, 3, '删除', NULL, NULL, NULL, '1', 'F', '0', 4, '1', 'system:user:delete', '#', '0', NULL, '2021-01-04 16:48:37', 'admin', '2021-01-23 09:58:48', 'admin'),
(17, 4, '查询', NULL, NULL, NULL, '1', 'F', '0', 1, '1', 'system:role:list', '#', '0', NULL, '2021-01-04 18:05:57', 'admin', '2021-01-23 09:58:54', 'admin'),
(18, 4, '新增', NULL, NULL, NULL, '1', 'F', '0', 2, '1', 'system:role:add', '#', '0', NULL, '2021-01-04 18:06:38', 'admin', '2021-01-23 09:58:58', 'admin'),
(19, 4, '修改', NULL, NULL, NULL, '1', 'F', '0', 3, '1', 'system:role:update', '#', '0', NULL, '2021-01-04 18:07:04', 'admin', '2021-01-23 09:59:01', 'admin'),
(20, 4, '删除', NULL, NULL, NULL, '1', 'F', '0', 4, '1', 'system:role:delete', '#', '0', NULL, '2021-01-04 18:07:21', 'admin', '2021-01-23 09:59:05', 'admin'),
(21, 5, '查询', NULL, NULL, NULL, '1', 'F', '0', 1, '1', 'system:menu:list', '#', '0', NULL, '2021-01-04 18:08:20', 'admin', '2021-01-23 09:59:30', 'admin'),
(22, 5, '新增', NULL, NULL, NULL, '1', 'F', '0', 2, '1', 'system:menu:add', '#', '0', NULL, '2021-01-04 18:08:37', 'admin', '2021-01-23 09:59:33', 'admin'),
(23, 5, '修改', NULL, NULL, NULL, '1', 'F', '0', 3, '1', 'system:menu:update', '#', '0', NULL, '2021-01-04 18:08:55', 'admin', '2021-01-23 09:59:37', 'admin'),
(24, 5, '删除', NULL, NULL, NULL, '1', 'F', '0', 4, '1', 'system:menu:delete', '#', '0', NULL, '2021-01-04 18:09:12', 'admin', '2021-01-23 09:59:40', 'admin'),
(25, 6, '查询', NULL, NULL, NULL, '1', 'F', '0', 1, '1', 'system:department:list', '#', '0', NULL, '2021-01-04 18:09:31', 'admin', '2021-02-02 14:19:13', 'admin'),
(26, 6, '新增', NULL, NULL, NULL, '1', 'F', '0', 2, '1', 'system:department:add', '#', '0', NULL, '2021-01-04 18:10:12', 'admin', '2021-02-02 14:19:20', 'admin'),
(27, 6, '修改', NULL, NULL, NULL, '1', 'F', '0', 3, '1', 'system:department:update', '#', '0', NULL, '2021-01-04 18:10:27', 'admin', '2021-02-02 14:19:28', 'admin'),
(28, 6, '删除', NULL, NULL, NULL, '1', 'F', '0', 4, '1', 'system:department:delete', '#', '0', NULL, '2021-01-04 18:10:42', 'admin', '2021-02-02 14:19:33', 'admin'),
(29, 7, '查询字典类型', NULL, NULL, NULL, '1', 'F', '0', 1, '1', 'system:dictType:list', '#', '0', NULL, '2021-01-04 18:14:06', 'admin', '2021-01-23 10:00:04', 'admin'),
(30, 7, '新增字典类型', NULL, NULL, NULL, '1', 'F', '0', 2, '1', 'system:dictType:add', '#', '0', NULL, '2021-01-04 18:14:52', 'admin', '2021-01-23 10:00:07', 'admin'),
(31, 7, '修改字典类型', NULL, NULL, NULL, '1', 'F', '0', 3, '1', 'system:dictType:update', '#', '0', NULL, '2021-01-04 18:15:34', 'admin', '2021-01-23 10:00:11', 'admin'),
(32, 7, '删除字典类型', NULL, NULL, NULL, '1', 'F', '0', 4, '1', 'system:dictType:delete', '#', '0', NULL, '2021-01-04 18:15:49', 'admin', '2021-01-23 10:00:14', 'admin'),
(33, 7, '查询字典数据', NULL, NULL, NULL, '1', 'F', '0', 5, '1', 'system:dictData:list', '#', '0', NULL, '2021-01-04 18:16:33', 'admin', '2021-01-23 10:00:20', 'admin'),
(34, 7, '新增字典数据', NULL, NULL, NULL, '1', 'F', '0', 6, '1', 'system:dictData:add', '#', '0', NULL, '2021-01-04 18:16:52', 'admin', '2021-01-23 10:00:24', 'admin'),
(35, 7, '修改字典数据', NULL, NULL, NULL, '1', 'F', '0', 7, '1', 'system:dictData:update', '#', '0', NULL, '2021-01-04 18:17:10', 'admin', '2021-01-23 10:00:27', 'admin'),
(36, 7, '删除字典数据', NULL, NULL, NULL, '1', 'F', '0', 8, '1', 'system:dictData:delete', '#', '0', NULL, '2021-01-04 18:17:24', 'admin', '2021-01-23 10:00:34', 'admin'),
(37, 2, '通知公告', 'notice', 'Notice', 'Notice', '1', 'C', '1', 10, '1', NULL, '#', '0', NULL, '2021-01-05 13:43:26', 'admin', '2021-01-05 15:11:15', 'admin'),
(38, 37, '查询', NULL, NULL, NULL, '1', 'F', '0', 1, '1', 'system:notice:list', '#', '0', NULL, '2021-01-05 14:06:12', 'admin', '2021-01-23 10:00:40', 'admin'),
(39, 37, '新增', NULL, NULL, NULL, '1', 'F', '0', 2, '1', 'system:notice:add', '#', '0', NULL, '2021-01-05 14:06:51', 'admin', '2021-01-23 10:00:43', 'admin'),
(40, 37, '修改', NULL, NULL, NULL, '1', 'F', '0', 3, '1', 'system:notice:update', '#', '0', NULL, '2021-01-05 14:07:10', 'admin', '2021-01-23 10:00:47', 'admin'),
(41, 37, '删除', NULL, NULL, NULL, '1', 'F', '0', 4, '1', 'system:notice:delete', '#', '0', NULL, '2021-01-05 14:07:28', 'admin', '2021-01-23 10:00:51', 'admin'),
(42, 8, '文章类型', 'articleType', 'ArticleType', 'ArticleType', '1', 'C', '1', 3, '1', NULL, '#', '0', NULL, '2021-01-06 15:05:31', 'admin', NULL, NULL),
(43, 9, '新增', NULL, NULL, NULL, '1', 'F', '1', 2, '1', 'blog:article:add', '#', '0', NULL, '2021-01-23 10:04:07', 'test', '2021-01-23 10:08:56', 'test'),
(44, 9, '修改', NULL, NULL, NULL, '1', 'F', '1', 3, '1', 'blog:article:update', '#', '0', NULL, '2021-01-23 10:07:04', 'test', '2021-01-23 10:09:03', 'test'),
(45, 9, '查询', NULL, NULL, NULL, '1', 'F', '1', 1, '1', 'blog:article:list', '#', '0', NULL, '2021-01-23 10:07:34', 'test', '2021-01-23 10:08:50', 'test'),
(46, 9, '删除', NULL, NULL, NULL, '1', 'F', '1', 4, '1', 'blog:article:delete', '#', '0', NULL, '2021-01-23 10:08:13', 'test', '2021-01-23 10:09:11', 'test'),
(47, 42, '查询', NULL, NULL, NULL, '1', 'F', '1', 1, '1', 'blog:articleType:list', '#', '0', NULL, '2021-01-23 10:09:33', 'test', NULL, NULL),
(48, 42, '新增', NULL, NULL, NULL, '1', 'F', '1', 2, '1', 'blog:articleType:add', '#', '0', NULL, '2021-01-23 10:09:46', 'test', NULL, NULL),
(49, 42, '修改', NULL, NULL, NULL, '1', 'F', '1', 3, '1', 'blog:articleType:update', '#', '0', NULL, '2021-01-23 10:10:00', 'test', NULL, NULL),
(50, 42, '删除', NULL, NULL, NULL, '1', 'F', '1', 4, '1', 'blog:articleType:delete', '#', '0', NULL, '2021-01-23 10:10:16', 'test', NULL, NULL),
(51, 8, '友情链接', 'friendlyLink', 'FriendlyLink', 'FriendlyLink', '1', 'C', '1', 10, '1', NULL, '#', '0', NULL, '2021-01-23 10:21:00', 'admin', NULL, NULL),
(53, 3, '状态显示', NULL, NULL, NULL, '1', 'F', '1', 10, '1', 'system:user:showStatus', '#', '0', NULL, '2021-01-29 14:02:59', 'admin', NULL, NULL),
(54, 4, '状态显示', NULL, NULL, NULL, '1', 'F', '1', 10, '1', 'system:role:showStatus', '#', '0', NULL, '2021-01-29 14:03:47', 'admin', NULL, NULL),
(55, 3, '修改头像', NULL, NULL, NULL, '1', 'F', '1', 11, '1', 'system:user:updateUserImg', '#', '0', NULL, '2021-02-02 14:53:56', 'admin', NULL, NULL),
(56, 3, '重置密码', NULL, NULL, NULL, '1', 'F', '1', 12, '1', 'system:user:resetPwd', '#', '0', NULL, '2021-02-02 14:54:23', 'admin', NULL, NULL),
(57, 3, '修改密码', NULL, NULL, NULL, '1', 'F', '1', 13, '1', 'system:user:updateUserPwd', '#', '0', NULL, '2021-02-02 14:54:55', 'admin', NULL, NULL),
(58, 3, '修改角色状态', NULL, NULL, NULL, '1', 'F', '1', 14, '1', 'system:role:changeRoleStatus', '#', '0', NULL, '2021-02-02 14:55:27', 'admin', NULL, NULL),
(59, 51, '查询', NULL, NULL, NULL, '1', 'F', '1', 1, '1', 'blog:friendlyLink:list', '#', '0', NULL, '2021-02-02 17:47:55', 'admin', NULL, NULL),
(60, 51, '新增', NULL, NULL, NULL, '1', 'F', '1', 2, '1', 'blog:friendlyLink:add', '#', '0', NULL, '2021-02-02 17:48:12', 'admin', NULL, NULL),
(61, 51, '修改', NULL, NULL, NULL, '1', 'F', '1', 3, '1', 'blog:friendlyLink:update', '#', '0', NULL, '2021-02-02 17:48:26', 'admin', NULL, NULL),
(62, 51, '删除', NULL, NULL, NULL, '1', 'F', '1', 4, '1', 'blog:friendlyLink:delete', '#', '0', NULL, '2021-02-02 17:48:39', 'admin', NULL, NULL),
(63, 42, '查询全部类型', NULL, NULL, NULL, '1', 'F', '1', 5, '1', 'blog:articleType:getAllType', '#', '0', NULL, '2021-03-02 11:18:10', 'admin', NULL, NULL),
(64, 0, '测试', '哈哈', '哈哈', '哈哈', '1', 'M', '1', 0, '1', NULL, '#', '0', NULL, '2021-03-25 10:38:14', 'admin', '2021-03-25 11:10:56', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `notices`
--

CREATE TABLE `notices` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL COMMENT '公告标题',
  `content` text NOT NULL COMMENT '内容',
  `isRead` int(11) DEFAULT '0' COMMENT '是否已读（0未读，1已读）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `notices`
--

INSERT INTO `notices` (`id`, `title`, `content`, `isRead`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(77, '新订单', '房间号：301，入住时间：2021-06-06', 1, NULL, '2021-06-02 17:15:53', NULL, '2021-06-02 17:16:05', 'admin'),
(78, '新订单', '房间号：103，入住时间：2021-06-07', 1, NULL, '2021-06-02 17:17:05', NULL, '2021-06-02 17:17:12', 'admin'),
(79, '订餐信息', '有客户订了“2021-06-09 3:03”的餐，请注意备餐！', 1, NULL, '2021-06-02 17:20:24', NULL, '2021-06-02 17:20:30', 'admin'),
(80, '取消订单', '订单号：2021060217170684过期支付，系统自动取消', 1, NULL, '2021-06-02 17:47:07', NULL, '2021-06-02 17:48:11', 'admin'),
(81, '新订单', '房间号：306，入住时间：2021-06-02', 1, NULL, '2021-06-02 17:54:01', NULL, '2021-06-02 17:59:35', 'admin'),
(82, '订餐信息', '有客户订了“2021-06-08 12:00”的餐，请注意备餐！', 0, NULL, '2021-06-03 10:09:47', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `roleName` varchar(255) NOT NULL COMMENT '角色名称',
  `roleKey` varchar(255) NOT NULL COMMENT '角色权限字符串',
  `roleSort` int(11) NOT NULL COMMENT '显示顺序',
  `dataScope` varchar(255) DEFAULT '1' COMMENT '数据范围（1：本部门及以下数据权限 2：本部门数据权限 3：仅本人权限）',
  `status` varchar(255) DEFAULT '1' COMMENT '角色状态（1正常 0停用）',
  `isDelete` varchar(255) DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `roles`
--

INSERT INTO `roles` (`id`, `roleName`, `roleKey`, `roleSort`, `dataScope`, `status`, `isDelete`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, '超级管理员', 'admin', 1, '1', '1', '0', NULL, '2021-01-08 12:04:02', 'admin', '2021-02-02 17:50:52', 'admin'),
(2, '测试', 'test', 2, '1', '1', '0', NULL, '2021-01-23 09:40:29', 'admin', '2021-03-02 11:18:25', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `role_menus`
--

CREATE TABLE `role_menus` (
  `id` int(11) NOT NULL,
  `roleId` int(11) NOT NULL COMMENT '角色roleId',
  `menuId` int(11) NOT NULL COMMENT '菜单menuId'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `role_menus`
--

INSERT INTO `role_menus` (`id`, `roleId`, `menuId`) VALUES
(1546, 1, 1),
(1547, 1, 8),
(1548, 1, 9),
(1549, 1, 45),
(1550, 1, 43),
(1551, 1, 44),
(1552, 1, 46),
(1553, 1, 42),
(1554, 1, 47),
(1555, 1, 48),
(1556, 1, 49),
(1557, 1, 50),
(1558, 1, 51),
(1559, 1, 59),
(1560, 1, 60),
(1561, 1, 61),
(1562, 1, 62),
(1563, 1, 2),
(1564, 1, 3),
(1565, 1, 13),
(1566, 1, 14),
(1567, 1, 15),
(1568, 1, 16),
(1569, 1, 53),
(1570, 1, 55),
(1571, 1, 56),
(1572, 1, 57),
(1573, 1, 58),
(1574, 1, 4),
(1575, 1, 17),
(1576, 1, 18),
(1577, 1, 19),
(1578, 1, 20),
(1579, 1, 54),
(1580, 1, 5),
(1581, 1, 21),
(1582, 1, 22),
(1583, 1, 23),
(1584, 1, 24),
(1585, 1, 6),
(1586, 1, 25),
(1587, 1, 26),
(1588, 1, 27),
(1589, 1, 28),
(1590, 1, 7),
(1591, 1, 29),
(1592, 1, 30),
(1593, 1, 31),
(1594, 1, 32),
(1595, 1, 33),
(1596, 1, 34),
(1597, 1, 35),
(1598, 1, 36),
(1599, 1, 37),
(1600, 1, 38),
(1601, 1, 39),
(1602, 1, 40),
(1603, 1, 41),
(1730, 2, 1),
(1731, 2, 8),
(1732, 2, 9),
(1733, 2, 45),
(1734, 2, 43),
(1735, 2, 44),
(1736, 2, 46),
(1737, 2, 42),
(1738, 2, 47),
(1739, 2, 48),
(1740, 2, 49),
(1741, 2, 50),
(1742, 2, 63),
(1743, 2, 51),
(1744, 2, 59),
(1745, 2, 60),
(1746, 2, 61),
(1747, 2, 62),
(1748, 2, 13),
(1749, 2, 53),
(1750, 2, 55),
(1751, 2, 17),
(1752, 2, 54),
(1753, 2, 21),
(1754, 2, 25),
(1755, 2, 29),
(1756, 2, 33),
(1757, 2, 38),
(1758, 2, 2),
(1759, 2, 3),
(1760, 2, 4),
(1761, 2, 5),
(1762, 2, 6),
(1763, 2, 7),
(1764, 2, 37);

-- --------------------------------------------------------

--
-- 表的结构 `tc_hotel_floors`
--

CREATE TABLE `tc_hotel_floors` (
  `id` int(11) NOT NULL COMMENT '楼层id',
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT '楼层名称',
  `status` tinyint(1) DEFAULT '1' COMMENT '楼层使用状态，默认值1为使用中，0为暂未开放',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者',
  `orderNum` int(11) NOT NULL COMMENT '排序'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='酒店楼层表';

--
-- 转存表中的数据 `tc_hotel_floors`
--

INSERT INTO `tc_hotel_floors` (`id`, `name`, `status`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`, `orderNum`) VALUES
(1, '1F', 1, '0000-00-00 00:00:00', '', '2021-04-06 14:12:27', 'admin', 1),
(2, '2F', 1, '0000-00-00 00:00:00', '', '2021-04-06 14:12:33', 'admin', 2),
(3, '3F', 1, '0000-00-00 00:00:00', '', '2021-04-06 14:12:41', 'admin', 3);

-- --------------------------------------------------------

--
-- 表的结构 `tc_hotel_rooms`
--

CREATE TABLE `tc_hotel_rooms` (
  `id` smallint(11) NOT NULL,
  `floor_id` int(11) NOT NULL DEFAULT '0' COMMENT '所属楼层id',
  `room_type_id` int(11) NOT NULL DEFAULT '0' COMMENT '房型id',
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '房号',
  `status` tinyint(1) DEFAULT '1' COMMENT '房间入住状态，1空闲，2预订，3在住，4故障，5打扫',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者',
  `info` text NOT NULL COMMENT '备注'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='酒店房间列表';

--
-- 转存表中的数据 `tc_hotel_rooms`
--

INSERT INTO `tc_hotel_rooms` (`id`, `floor_id`, `room_type_id`, `name`, `status`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`, `info`) VALUES
(12, 1, 8, '101', 1, '2021-04-02 22:35:46', 'admin', '2021-05-13 17:40:18', 'admin', ''),
(13, 1, 8, '102', 1, '2021-04-02 22:35:58', 'admin', NULL, NULL, ''),
(14, 1, 7, '103', 1, '2021-04-02 22:36:10', 'admin', NULL, NULL, ''),
(15, 1, 8, '104', 1, '2021-04-02 22:36:27', 'admin', '2021-05-13 17:41:57', 'admin', ''),
(16, 1, 7, '105', 1, '2021-04-02 22:36:45', 'admin', '2021-05-14 17:18:57', 'admin', ''),
(17, 2, 8, '201', 1, '2021-04-02 22:42:36', 'admin', '2021-05-13 17:41:28', 'admin', ''),
(18, 2, 7, '202', 1, '2021-04-02 22:42:49', 'admin', '2021-05-14 17:18:51', 'admin', ''),
(19, 2, 8, '203', 1, '2021-04-02 22:43:00', 'admin', '2021-05-13 17:42:02', 'admin', ''),
(20, 2, 7, '204', 1, '2021-04-02 22:43:10', 'admin', '2021-05-13 17:40:59', 'admin', ''),
(21, 2, 7, '205', 1, '2021-04-02 22:43:24', 'admin', '2021-05-13 17:40:53', 'admin', ''),
(22, 2, 8, '206', 1, '2021-04-02 22:43:41', 'admin', '2021-05-13 17:40:36', 'admin', ''),
(23, 3, 8, '301', 2, '2021-04-02 22:44:08', 'admin', '2021-05-14 17:18:42', 'admin', ''),
(24, 3, 7, '302', 1, '2021-04-02 22:44:21', 'admin', '2021-05-13 17:40:44', 'admin', ''),
(25, 3, 8, '303', 1, '2021-04-02 22:44:36', 'admin', '2021-05-14 17:18:35', 'admin', ''),
(26, 3, 7, '304', 1, '2021-04-02 22:44:50', 'admin', '2021-05-14 17:18:28', 'admin', ''),
(27, 3, 8, '305', 1, '2021-04-02 22:45:01', 'admin', NULL, NULL, ''),
(28, 3, 7, '306', 2, '2021-04-02 22:45:13', 'admin', '2021-05-13 17:41:10', 'admin', ''),
(29, 1, 8, '106', 1, '2021-04-02 22:45:28', 'admin', NULL, NULL, ''),
(32, 1, 8, '107', 1, '2021-04-29 16:56:20', 'admin', NULL, NULL, ''),
(33, 1, 7, '108', 1, '2021-04-29 16:56:30', 'admin', NULL, NULL, '');

-- --------------------------------------------------------

--
-- 表的结构 `tc_hotel_room_types`
--

CREATE TABLE `tc_hotel_room_types` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '房型名称',
  `isTop` int(11) DEFAULT '0' COMMENT '推荐首页',
  `price` smallint(6) DEFAULT '0' COMMENT '价格',
  `vip_price` smallint(6) DEFAULT '0' COMMENT 'vip价',
  `rank` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `group_price` smallint(5) DEFAULT '0' COMMENT '团体价',
  `area` smallint(6) DEFAULT '0' COMMENT '面积',
  `window` int(11) NOT NULL DEFAULT '0' COMMENT '窗户：0无，1有',
  `wifi` varchar(255) DEFAULT '' COMMENT '网络',
  `floor` varchar(255) DEFAULT '' COMMENT '楼层',
  `people_num` smallint(6) DEFAULT '0' COMMENT '可住几人',
  `smoking` varchar(255) DEFAULT '' COMMENT '吸烟',
  `bed_type` varchar(255) DEFAULT '' COMMENT '床型',
  `meals` varchar(255) DEFAULT '' COMMENT '餐食',
  `photo` varchar(255) DEFAULT '' COMMENT '封面',
  `photo_s` varchar(255) DEFAULT '' COMMENT '图片',
  `support` varchar(500) DEFAULT '' COMMENT '便利设施',
  `bathroom` varchar(500) DEFAULT '' COMMENT '浴室',
  `food` varchar(500) DEFAULT '' COMMENT '食品饮料',
  `media` varchar(500) DEFAULT '' COMMENT '媒体科技',
  `landscape` varchar(500) DEFAULT '' COMMENT '室外景观',
  `facilities` varchar(500) DEFAULT '' COMMENT '其它设施',
  `instructions` varchar(500) DEFAULT '' COMMENT '预定须知',
  `cancel_rules` varchar(500) DEFAULT '' COMMENT '取消规则',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='客房分类';

--
-- 转存表中的数据 `tc_hotel_room_types`
--

INSERT INTO `tc_hotel_room_types` (`id`, `name`, `isTop`, `price`, `vip_price`, `rank`, `group_price`, `area`, `window`, `wifi`, `floor`, `people_num`, `smoking`, `bed_type`, `meals`, `photo`, `photo_s`, `support`, `bathroom`, `food`, `media`, `landscape`, `facilities`, `instructions`, `cancel_rules`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(7, '高级双床房', 1, 0, 0, 0, 0, 40, 1, '免费wifi', '1F，2F，3F', 2, '部分区域禁烟', '2张单人床 (1.2米)', '无餐食', '/uploads/1/CHP_1617257237971_src=http___ac-q.static.booking.cn_images_hotel_max1024x768_150_150722021.jpg&refer=http___ac-q.static.booking.jpg', '/uploads/1/CHP_1617257580900_4.jpg,/uploads/1/CHP_1617257584897_5.jpg,/uploads/1/CHP_1617257588178_3.jpg', '客房WIFI（免费）\n房间内高速上网\n空调（免费）\n沙发\n遮光窗帘\n手动窗帘\n衣柜／衣橱\n书桌\n开夜床\n床具:鸭绒被\n床具：毯子或被子\n备用床具\n房内保险箱\n电子秤\n闹钟\n针线包\n多种规格电源插座\n110V电压插座\n220V电压插座\n雨伞', '独立淋浴间\n独立卫生间\n吹风机\n浴室化妆放大镜\n洗浴用品\n浴衣\n24小时热水', '瓶装水（免费）\n电热水壶\n迷你吧', '液晶电视机\n智能门锁\n国内长途电话\n国际长途电话\n有线频道\n卫星频道\n音响\nDVD播放机', '\n海景\n花园景\n露台\n阳台', '欢迎礼品', '订单确认后30分钟内可免费取消修改，若未入住或过时取消修改担保费用将不予退还。携程会根据您的担保方式，预授权或暂扣RMB 549用于担保。订单需等酒店或供应商确认后生效，订单确认结果以携程短信、邮件或app通知为准。', '订单确认后30分钟内可免费取消修改，若未入住或过时取消修改担保费用将不予退还。携程会根据您的担保方式，预授权或暂扣RMB 549用于担保。订单需等酒店或供应商确认后生效，订单确认结果以携程短信、邮件或app通知为准。', '2021-04-01 14:11:40', 'admin', '2021-04-26 17:42:11', 'admin'),
(8, '雅致景观大床房', 1, 0, 0, 0, 0, 40, 1, '免费wifi', '1F，2F，3F', 2, '部分区域禁烟', '1张大床', '无餐食', '/uploads/1/CHP_1617257695236_4.jpg', '/uploads/1/CHP_1617257698327_2.jpg,/uploads/1/CHP_1617257701310_3.jpg,/uploads/1/CHP_1617257704951_5.jpg', '客房WIFI（免费）\n房间内高速上网\n空调（免费）\n沙发\n遮光窗帘\n手动窗帘\n衣柜／衣橱\n书桌\n开夜床\n床具:鸭绒被\n床具：毯子或被子\n备用床具\n房内保险箱\n电子秤\n闹钟\n针线包\n多种规格电源插座\n110V电压插座\n220V电压插座\n雨伞', '独立淋浴间\n独立卫生间\n吹风机\n浴室化妆放大镜\n洗浴用品\n浴衣\n24小时热水', '瓶装水（免费）\n电热水壶\n迷你吧', '液晶电视机\n智能门锁\n国内长途电话\n国际长途电话\n有线频道\n卫星频道\n音响\nDVD播放机', '山景', '欢迎礼品', '订单确认后30分钟内可免费取消修改，若未入住或过时取消修改担保费用将不予退还。携程会根据您的担保方式，预授权或暂扣RMB 410用于担保。订单需等酒店或供应商确认后生效，订单确认结果以携程短信、邮件或app通知为准。', '订单确认后30分钟内可免费取消修改，若未入住或过时取消修改担保费用将不予退还。携程会根据您的担保方式，预授权或暂扣RMB 410用于担保。订单需等酒店或供应商确认后生效，订单确认结果以携程短信、邮件或app通知为准。', '2021-04-01 14:17:17', 'admin', '2021-04-26 17:42:04', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `tc_orders`
--

CREATE TABLE `tc_orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `roomid` int(11) NOT NULL COMMENT '房间id',
  `uid` varchar(255) NOT NULL COMMENT '操作员',
  `start_time` date NOT NULL COMMENT '入住时间',
  `end_time` date NOT NULL COMMENT '退房时间',
  `from_type` int(10) UNSIGNED DEFAULT '0' COMMENT '来源分类，默认值0为散客，1渠道2公司3网络4团体房',
  `order_id` varchar(50) NOT NULL DEFAULT '' COMMENT '订单ID',
  `price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '订单总金额',
  `people` varchar(255) DEFAULT '' COMMENT '预定人',
  `people_mobile` char(11) NOT NULL DEFAULT '' COMMENT '预订人手机号码',
  `mycome` date DEFAULT NULL COMMENT '到达时间',
  `content` varchar(500) DEFAULT '' COMMENT '备注',
  `deposit_price` decimal(10,2) DEFAULT '0.00' COMMENT '押金',
  `confirm_price` decimal(10,2) DEFAULT '0.00' COMMENT '退房实收金额',
  `status` tinyint(1) NOT NULL DEFAULT '2' COMMENT '订单状态，1已入住2未入住3取消订单4退房',
  `price_extras` decimal(10,2) DEFAULT '0.00' COMMENT '额外消费',
  `pay_uname` varchar(60) DEFAULT '' COMMENT '付款人',
  `pay_type` tinyint(1) DEFAULT '1' COMMENT '支付方式：1微信，2支付宝，3，现金',
  `pay_status` tinyint(1) DEFAULT '0' COMMENT '支付状态，0未支付，1已支付',
  `eat_type` tinyint(1) DEFAULT '0' COMMENT '是否含早餐：0不含，1包含',
  `pay_id` varchar(255) DEFAULT NULL COMMENT '微信支付订单号，退款使用',
  `pay_money` int(11) DEFAULT '0' COMMENT '微信支付总金额，用于退款',
  `refund_status` int(11) DEFAULT '0' COMMENT '退款状态',
  `createdAt` date DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` date DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单表';

--
-- 转存表中的数据 `tc_orders`
--

INSERT INTO `tc_orders` (`id`, `roomid`, `uid`, `start_time`, `end_time`, `from_type`, `order_id`, `price`, `people`, `people_mobile`, `mycome`, `content`, `deposit_price`, `confirm_price`, `status`, `price_extras`, `pay_uname`, `pay_type`, `pay_status`, `eat_type`, `pay_id`, `pay_money`, `refund_status`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(148, 16, 'oL9Fw1tyk3nKp58-F9cl8XOuzPnQ', '2021-06-14', '2021-06-30', 3, '2021060210410146', '6400.00', '哈哈哈', '13655555555', NULL, '', '0.00', '0.00', 4, '247.00', '', 1, 1, 0, NULL, 0, 0, '2021-06-02', NULL, '2021-06-02', 'admin'),
(149, 23, 'oL9Fw1tyk3nKp58-F9cl8XOuzPnQ', '2021-06-06', '2021-06-24', 3, '2021060217155723', '5400.00', '哈哈', '13666666666', NULL, '', '0.00', '0.00', 2, '168.00', '', 1, 1, 0, NULL, 0, 0, '2021-06-02', NULL, '2021-06-02', 'admin'),
(150, 14, 'oL9Fw1tyk3nKp58-F9cl8XOuzPnQ', '2021-06-07', '2021-06-10', 3, '2021060217170684', '1200.00', '刚刚', '13999999999', NULL, '', '0.00', '0.00', 3, '0.00', '', 1, 0, 0, NULL, 0, 0, '2021-06-02', NULL, NULL, NULL),
(151, 28, 'oL9Fw1tyk3nKp58-F9cl8XOuzPnQ', '2021-06-02', '2021-06-03', 3, '202106021754012', '400.00', '测试', '13699999999', NULL, '', '0.00', '0.00', 2, '0.00', '', 1, 0, 0, NULL, 0, 0, '2021-06-02', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `tc_specialdates`
--

CREATE TABLE `tc_specialdates` (
  `id` int(10) UNSIGNED NOT NULL,
  `startdate` date NOT NULL DEFAULT '0000-00-00' COMMENT '开始日期',
  `enddate` date NOT NULL DEFAULT '0000-00-00' COMMENT '结束日期',
  `price` varchar(255) NOT NULL COMMENT '价格',
  `breakfast` tinyint(3) DEFAULT '0' COMMENT '含早餐',
  `message` varchar(255) DEFAULT '' COMMENT '价格说明',
  `typeId` int(11) NOT NULL COMMENT '房型',
  `status` varchar(255) DEFAULT '1' COMMENT '价格状态（1正常 0停用）',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tc_specialdates`
--

INSERT INTO `tc_specialdates` (`id`, `startdate`, `enddate`, `price`, `breakfast`, `message`, `typeId`, `status`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(10, '2021-04-06', '2021-05-13', '300', 0, '', 7, '1', '2021-04-01 16:08:31', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `tc_specialweeks`
--

CREATE TABLE `tc_specialweeks` (
  `id` int(10) UNSIGNED NOT NULL,
  `weeks` int(11) NOT NULL COMMENT '天（周一：1，周二：2，周三：3，周四：4，周五：5，周六：6，周日：7）',
  `price` varchar(255) NOT NULL COMMENT '价格',
  `breakfast` tinyint(3) DEFAULT '0' COMMENT '含早餐',
  `message` varchar(255) DEFAULT '' COMMENT '价格说明',
  `typeId` int(11) NOT NULL COMMENT '房型',
  `status` varchar(255) DEFAULT '1' COMMENT '价格状态（1正常 0停用）',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tc_specialweeks`
--

INSERT INTO `tc_specialweeks` (`id`, `weeks`, `price`, `breakfast`, `message`, `typeId`, `status`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(2, 1, '300', 0, '后挖掘佛违法哇哦飞机王fie娃儿服务费挖坟哇哦就反胃奥飞蜂王浆eof哇附近而发', 8, '1', '2021-04-01 15:41:01', 'admin', NULL, NULL),
(3, 1, '400', 0, '', 7, '1', '2021-04-01 15:42:52', 'admin', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `deptId` int(11) NOT NULL COMMENT '部门deptId',
  `userName` varchar(255) NOT NULL COMMENT '用户名',
  `nickName` varchar(255) DEFAULT NULL COMMENT '昵称',
  `sex` varchar(255) DEFAULT '1' COMMENT '性别（0代表女 1代表男）',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(255) DEFAULT NULL COMMENT '手机号',
  `isDelete` varchar(255) DEFAULT '0' COMMENT '删除标志（0代表存在 1代表删除）',
  `status` varchar(255) DEFAULT '1' COMMENT '帐号状态（1正常 0停用）',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `createdBy` varchar(255) DEFAULT NULL COMMENT '创建者',
  `updatedAt` datetime DEFAULT NULL COMMENT '更新时间',
  `updatedBy` varchar(255) DEFAULT NULL COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `deptId`, `userName`, `nickName`, `sex`, `password`, `avatar`, `email`, `mobile`, `isDelete`, `status`, `remark`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`) VALUES
(1, 1, 'admin', 'admin', '1', '$2a$10$izg/rdfiAAqlV5vUIxIULuQ6y3.F9qxD4ujcqluF8cCI7PFCkYFp2', '/uploads/1/CHP_1617249555022_reg.png', NULL, '13809099090', '0', '1', '', '2021-01-08 12:04:02', 'admin', '2021-03-23 10:41:02', 'admin'),
(2, 2, 'test', 'test', '0', '$2a$10$npESJl5c.05NfvrDmYKMoe4KVn9h8AZqFrLl9R4x9Trv8IaRN5TU.', '/uploads/2/CHP_1612249060086_16f194d7b8580d2950c33ab2c9e549d2.jpg', NULL, '13809099090', '0', '1', NULL, '2021-01-23 09:36:27', 'admin', '2021-03-24 09:53:54', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL COMMENT '用户id',
  `roleId` int(11) NOT NULL COMMENT '角色id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `user_roles`
--

INSERT INTO `user_roles` (`id`, `userId`, `roleId`) VALUES
(24, 1, 1),
(31, 2, 2);

-- --------------------------------------------------------

--
-- 表的结构 `wx_user`
--

CREATE TABLE `wx_user` (
  `id` int(11) NOT NULL,
  `openid` varchar(255) NOT NULL COMMENT 'openid',
  `real_name` varchar(255) DEFAULT NULL COMMENT '真实姓名',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号码',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转储表的索引
--

--
-- 表的索引 `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `article_types`
--
ALTER TABLE `article_types`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`deptId`) USING BTREE;

--
-- 表的索引 `dict_datas`
--
ALTER TABLE `dict_datas`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `dict_types`
--
ALTER TABLE `dict_types`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `	type_id` (`type_id`);

--
-- 表的索引 `food_evaluates`
--
ALTER TABLE `food_evaluates`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `food_id` (`food_id`);

--
-- 表的索引 `food_mids`
--
ALTER TABLE `food_mids`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `order_id` (`order_id`);

--
-- 表的索引 `food_orders`
--
ALTER TABLE `food_orders`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `food_types`
--
ALTER TABLE `food_types`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `friendly_links`
--
ALTER TABLE `friendly_links`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `notices`
--
ALTER TABLE `notices`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `role_menus`
--
ALTER TABLE `role_menus`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `tc_hotel_floors`
--
ALTER TABLE `tc_hotel_floors`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `tc_hotel_rooms`
--
ALTER TABLE `tc_hotel_rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`room_type_id`);

--
-- 表的索引 `tc_hotel_room_types`
--
ALTER TABLE `tc_hotel_room_types`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `tc_orders`
--
ALTER TABLE `tc_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`) USING BTREE,
  ADD KEY `roomid` (`roomid`);

--
-- 表的索引 `tc_specialdates`
--
ALTER TABLE `tc_specialdates`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `tc_specialweeks`
--
ALTER TABLE `tc_specialweeks`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `userName` (`userName`) USING BTREE;

--
-- 表的索引 `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 表的索引 `wx_user`
--
ALTER TABLE `wx_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `openid` (`openid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用表AUTO_INCREMENT `article_types`
--
ALTER TABLE `article_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用表AUTO_INCREMENT `departments`
--
ALTER TABLE `departments`
  MODIFY `deptId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `dict_datas`
--
ALTER TABLE `dict_datas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- 使用表AUTO_INCREMENT `dict_types`
--
ALTER TABLE `dict_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `food_evaluates`
--
ALTER TABLE `food_evaluates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `food_mids`
--
ALTER TABLE `food_mids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- 使用表AUTO_INCREMENT `food_orders`
--
ALTER TABLE `food_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用表AUTO_INCREMENT `food_types`
--
ALTER TABLE `food_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `friendly_links`
--
ALTER TABLE `friendly_links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- 使用表AUTO_INCREMENT `notices`
--
ALTER TABLE `notices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- 使用表AUTO_INCREMENT `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `role_menus`
--
ALTER TABLE `role_menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1765;

--
-- 使用表AUTO_INCREMENT `tc_hotel_floors`
--
ALTER TABLE `tc_hotel_floors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '楼层id', AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `tc_hotel_rooms`
--
ALTER TABLE `tc_hotel_rooms`
  MODIFY `id` smallint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 使用表AUTO_INCREMENT `tc_hotel_room_types`
--
ALTER TABLE `tc_hotel_room_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `tc_orders`
--
ALTER TABLE `tc_orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- 使用表AUTO_INCREMENT `tc_specialdates`
--
ALTER TABLE `tc_specialdates`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用表AUTO_INCREMENT `tc_specialweeks`
--
ALTER TABLE `tc_specialweeks`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- 使用表AUTO_INCREMENT `wx_user`
--
ALTER TABLE `wx_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
