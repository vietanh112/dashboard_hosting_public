'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class pf_users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    };
    pf_users.init({
        ID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        EMPLOYEE_ID: DataTypes.STRING,
        USERNAME: DataTypes.STRING,
        PASSWORD: DataTypes.STRING,
        EMAIL: DataTypes.STRING,
        ROLE_ID: DataTypes.INTEGER,
        POSITION_ID: DataTypes.INTEGER,
        ALLOW: DataTypes.INTEGER,
        STATUS: DataTypes.INTEGER,
        TOKEN: DataTypes.STRING,
        TOKEN_REFRESH: DataTypes.STRING,
        CREATE_AT: DataTypes.DATE,
        UPDATE_AT: DataTypes.DATE
    }, {
        sequelize,
        timestamps: false,
        tableName: 'pf_users',
        modelName: 'pf_users',
    });
    return pf_users;
};
