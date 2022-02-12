const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const OfferCode = db.define('offerCodes', {
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey : true
    },

    presence : {
        type : DataTypes.NUMBER
    },

    code : {
        type : DataTypes.STRING
    }
}, {
    timestamps : false
})

module.exports = OfferCode