const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const address = db.define("address", {
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey : true
    },

    userId : {
        type : DataTypes.STRING,
    },

    code : {
        type : DataTypes.STRING
    },

    address : {
        type : DataTypes.STRING
    }
}, {
    timestamps : false
})

module.exports = address