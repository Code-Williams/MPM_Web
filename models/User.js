const { DataTypes } = require('sequelize');
const db = require("../configs/db")

"CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(128), password VARCHAR(128), email TEXT, firstName TEXT, lastName TEXT, number VARCHAR(128), userRank VARCHAR(64))"

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
    },

    userRank : {
        type : DataTypes.STRING,
    }

}, {
    timestamps : false
})

user.validPassword = (user, pwd) => {
    return user.password === pwd
}

module.exports = user