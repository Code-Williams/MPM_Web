const { DataTypes } = require('sequelize');
const db = require("../configs/db");

const Home = db.define('offers', {
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

    expire : {
        type : DataTypes.DATE,
    },

    link : {
        type : DataTypes.STRING,
    },

    offer : {
        type : DataTypes.NUMBER,
    }
}, {
    timestamps : false
})

module.exports = Home;