const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Ticket = db.define("tickets", {
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey : true
    },

    name : {
        type : DataTypes.STRING
    },

    email : {
        type : DataTypes.STRING
    },

    subject : {
        type : DataTypes.STRING
    },

    number : {
        type : DataTypes.STRING
    },

    message : {
        type : DataTypes.STRING
    }
}, {
    timestamps : false
})

module.exports = Ticket