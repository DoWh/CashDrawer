const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'cash_drawer_log', 
    'drawer_master', 
    '123456789', 
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);

const Action = sequelize.define(
    'User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

    }, {
        tableName: 'action',
        updatedAt: false,
        sequelize
    }
);
// Action.sync({force: true});

module.exports = Action;