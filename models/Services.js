const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Services = db.define("services", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    file : {
        type : DataTypes.STRING,
    },

    description : {
        type : DataTypes.STRING,
        defaultValue : ""
    },

    username : {
        type : DataTypes.STRING,
    },

    number : {
        type : DataTypes.STRING,
    },

    email : {
        type : DataTypes.STRING,
    }
}, {
    timestamps : false
})

module.exports = Services