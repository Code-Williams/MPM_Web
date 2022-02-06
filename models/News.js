const { DataTypes } = require('sequelize');
const db = require("../configs/db")

const News = db.define('news', {
    id : {
        type : DataTypes.NUMBER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },

    title : {
        type : DataTypes.STRING,
    },

    description : {
        type : DataTypes.STRING,
    },

    writer : {
        type : DataTypes.STRING,
    },

    picture : {
        type : DataTypes.STRING,
    },

    time : {
        type : DataTypes.DATE,
    }
}, {
    timestamps : false
})

module.exports = News