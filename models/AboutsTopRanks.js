const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const AboutsTopRanks = db.define("aboutsTopRanks", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    firstName : {
        type : DataTypes.STRING
    },

    lastName : {
        type : DataTypes.STRING
    },

    userRank : {
        type : DataTypes.STRING
    },

    instagram : {
        type : DataTypes.STRING
    },

    picture : {
        type : DataTypes.STRING
    }
}, {
    timestamps : false
})

module.exports = AboutsTopRanks