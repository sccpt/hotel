'use strict';
/*
 * @Author: yurui 
 * @Date: 2020-09-01
 */

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

    const Room = app.model.define('tc_hotel_rooms', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        floor_id: {
            allowNull: false,
            type: INTEGER,
            comment: '所属楼层id'
        },
        room_type_id: {
            allowNull: false,
            type: INTEGER,
            comment: '房型id'
        },
        name: {
            allowNull: false,
            type: STRING,
            comment: '房号'
        },
        info: {
            allowNull: true,
            type: TEXT,
            comment: '备注'
        },
        status: {
            allowNull: true,
            type: INTEGER,
            defaultValue: 1,
            comment: '房间入住状态，1空闲，2预订，3在住，4故障，5打扫'
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

    Room.associate = function () {
        app.model.Room.belongsTo(app.model.Floor, { foreignKey: 'floor_id', targetKey: 'id', as: 'floor' });
        app.model.Room.belongsTo(app.model.HotelType, { foreignKey: 'room_type_id', targetKey: 'id', as: 'type' });
    };

    Room.updateRoom = async (query, where) => {
        const transaction = await app.transaction();
        await Room.findOne({
            ...where,
            lock: transaction.LOCK.UPDATE,
        }, { transaction });
        return await Room.update(query, { ...where, transaction });
    };

    Room.deleteRoom = async (id) => {
        const transaction = await app.transaction();
        await Room.findOne({
            where: { id },
            lock: transaction.LOCK.UPDATE,
        }, { transaction });
        return await Room.destroy({ where: { id }, transaction })
    };

    return Room;
};