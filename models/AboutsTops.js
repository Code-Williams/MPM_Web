const { DataTypes } = require('sequelize');
const db = require("../configs/db")

const AboutsTops = db.define('aboutsTops', {

    id : {
        type : DataTypes.NUMBER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },

    title : {
        type : DataTypes.TEXT
    },

    description : {
        type : DataTypes.TEXT
    },

    icon : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = AboutsTops