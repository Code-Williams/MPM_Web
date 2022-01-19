const express = require("express");
const { MongoClient } = require("mongodb");
const config = require("./config.json");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/templates");
app.use(express.static(__dirname + "/public")); //__dir and not _dir
app.set("view engine", "ejs");

MongoClient.connect(config.base.db_url, async (err, client) => {
  if (err) throw err;

  const db = client.db("Mpm-main");
  console.log(`Connected to DataBase`);

  const pageInformation = await db
    .collection("pageInformation")
    .find({})
    .toArray();

  app.get("/", (req, res) => {
    res.render("index", { pageInformation });
  });
});

app.listen(config.base.port, () => {
  console.log(`Server is running on ${config.base.port}`);
});
