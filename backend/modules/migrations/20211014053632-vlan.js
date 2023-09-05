'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('nw_vlan', {
            ID: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            NAME: {
                type: Sequelize.STRING
            },
            DESCRIPTION: {
                type: Sequelize.STRING
            },
            SERVER: {
                type: Sequelize.INTEGER
            },
            STATUS: {
                type: Sequelize.INTEGER
            },
            CREATE_AT: {
                allowNull: false,
                type: Sequelize.DATE
            },
            UPDATE_AT: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {charset: 'utf8', collate: 'utf8_unicode_ci'});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('nw_vlan');
    }
};
