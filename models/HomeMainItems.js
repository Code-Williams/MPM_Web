const { DataTypes } = require('sequelize');
const db = require('../configs/db');

const HomeMainItems = db.define('homeMainItems', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },

    name : {
        type : DataTypes.STRING,
    },

    description : {
        type : DataTypes.STRING,
    },

    link : {
        type : DataTypes.STRING,
    },

    picture : {
        type : DataTypes.STRING,
    }
}, {
    timestamps : false,
})

module.exports = HomeMainItems;