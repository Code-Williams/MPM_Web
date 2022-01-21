const express = require("express");
const mysql = require("mysql");
const config = require("./config.json");
const bodyParser = require("body-parser");

const app = express();

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shayanwilliams",
  database: "mpm",
});

conn.connect((err, res) => {
  if (err) throw err;
  console.log("Connected to DataBase");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/templates");
app.use(express.static(__dirname + "/public")); //__dir and not _dir
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(config.base.port, () => {
  console.log(`Server is running on ${config.base.port}`);
});
