'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class nw_server extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    };
    nw_server.init({
        ID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        NAME: DataTypes.STRING,
        DESCRIPTION: DataTypes.STRING,
        STATUS: DataTypes.INTEGER,
        CREATE_AT: DataTypes.DATE,
        UPDATE_AT: DataTypes.DATE
    }, {
        sequelize,
        timestamps: false,
        tableName: 'nw_server',
        modelName: 'nw_server',
    });
    return nw_server;
};