const sequelize = require("sequelize");

const db = new sequelize('mpm', 'root', 'shayanwilliams', {
    host : "localhost",
    dialect : "mysql",
})

try {
    db.authenticate()
    console.log(`Database connected`)
} catch (error) {
    console.log(`Error connecting to database: ${error}`)
}

module.exports = db;