const express = require("express");
const mysql = require("mysql");
const config = require("./config.json");
const bodyParser = require("body-parser");

const app = express();

const conn = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name,
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

const registerRouter = require("./routes/registerRouter");
app.use("/register", registerRouter);

const loginRouter = require("./routes/loginRouter");
app.use("/login", loginRouter);

const dashboardRouter = require("./routes/dashboardRouter");
app.use("/dashboard", dashboardRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(config.app.port, () => {
  console.log(`Server is running on ${config.app.port}`);
});
