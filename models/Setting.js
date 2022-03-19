const {DataTypes} = require("sequelize")
const db = require("../configs/db")

const Settings = db.define("settings", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.TEXT
    },

    value : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = Settings