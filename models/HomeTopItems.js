const { DataTypes } = require('sequelize');
const db = require("../configs/db");

const Home = db.define('homeTopObjs', {
    id : {
        type : DataTypes.NUMBER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.STRING,
    },

    description : {
        type : DataTypes.STRING,
    },

    icon : {
        type : DataTypes.STRING,
    }
}, {
    timestamps : false
})

module.exports = Home;