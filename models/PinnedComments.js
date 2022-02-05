const { DataTypes } = require('sequelize');
const db = require("../configs/db");

const PinnedComments = db.define('pinnedComments', {
    id : {
        type : DataTypes.NUMBER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.STRING,
    },

    job : {
        type : DataTypes.STRING,
    },

    icon : {
        type : DataTypes.STRING,
    },

    comment : {
        type : DataTypes.STRING,
    }
}, {
    timestamps : false
})

module.exports = PinnedComments;