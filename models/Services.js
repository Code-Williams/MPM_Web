const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Services = db.define("services", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    userId : {
        type : DataTypes.STRING,
    },

    file : {
        type : DataTypes.STRING,
    },

    description : {
        type : DataTypes.STRING,
    }
}, {
    timestamps : false
})

module.exports = Services