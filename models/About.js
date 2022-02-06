const { DataTypes } = require('sequelize');
const db = require("../configs/db")

const About = db.define('about', {
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
    }
}, {
    timestamps : false
})

module.exports = About