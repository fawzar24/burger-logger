var express = require("express");
var route = express.router();

var burger = require("../models/burgers.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", data);
    });
});

router.post("/burgers", function(req, res){
    burger.create([
        "burger_name"
    ],
    [
       req.param.burger_name 
    ], function(data){
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res){
    var conditon = "id " + req.param.id;

    burger.update({
        devoured: true
    }, conditon, function(data){
        res.redirect("/");
    });
});

module.exports = router;



