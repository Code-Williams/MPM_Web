const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Orders = db.define('orders', {
    
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey : true
    },

    userId : {
        type : DataTypes.STRING
    },

    productId : {
        type : DataTypes.STRING
    },

    count : {
        type : DataTypes.STRING,
        defaultValue : 1
    },

    status : {
        type : DataTypes.STRING
    }

}, {
    timestamps : false
})

module.exports = Orders