const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Point = db.define("points", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    userId : {
        type : DataTypes.TEXT
    },

    points : {
        type : DataTypes.NUMBER
    },

    allPoints : {
        type : DataTypes.NUMBER
    }
}, {
    timestamps : false
})

module.exports = Point