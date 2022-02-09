const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const contact = db.define('contact', {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        allowNull : false,
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

module.exports = contact