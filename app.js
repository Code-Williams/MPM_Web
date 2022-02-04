const express = require("express");
const config = require("./config.json");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public")); //__dir and not _dir
app.set("view engine", "ejs");

const routes = require("./routes")
app.use("/", routes)

app.get("/*", (req, res) => {
  res.render("404")
})

app.listen(config.app.port, () => {
  console.log(`Server is running on ${config.app.port}`);
});
