const { DataTypes } = require('sequelize');
const db = require("../configs/db")

const user = db.define('user', {

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    username : {
        type : DataTypes.STRING,
    },

    password : {
        type : DataTypes.STRING,
    },

    email : {
        type : DataTypes.STRING,
    },

    firstName : {
        type : DataTypes.STRING,
    },

    lastName : {
        type : DataTypes.STRING,
    },

    number : {
        type : DataTypes.NUMBER,
    }

}, {
    timestamps : false
})

user.validPassword = (user, pwd) => {
    return user.password === pwd
}

module.exports = user