'use strict';
/*
 * @Author: yurui 
 * @Date: 2021-06-01
 */

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const DictData = app.model.define('dict_datas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    dictSort: {
      allowNull: false,
      type: INTEGER,
      comment: '字典排序'
    },
    dictLabel: {
      allowNull: false,
      type: STRING,
      comment: '字典标签'
    },
    dictValue: {
      allowNull: false,
      type: STRING,
      comment: '字典键值'
    },
    dictType: {
      allowNull: false,
      type: STRING,
      comment: '字典类型'
    },
    cssClass: {
      type: STRING,
      comment: '样式属性（其他样式扩展）'
    },
    listClass: {
      type: STRING,
      comment: '表格回显样式'
    },
    isDefault: {
      type: STRING,
      defaultValue: 'Y',
      comment: '是否默认（Y是 N否）'
    },
    status: {
      type: STRING,
      defaultValue: '1',
      comment: '菜单状态（1正常 0停用）'
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

  return DictData;
};