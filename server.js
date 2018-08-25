var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/index.html"));
});

app.get("tables", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/tables.html"));
});

app.get("reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/reserve.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
