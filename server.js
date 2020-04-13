var express = require("express");
var exphbs = require("express-handlebasrs");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");


app.listen(PORT, function(){
    console.log("app listening on: http://localhost: " + PORT);
});