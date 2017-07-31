var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var friends = [
       {name: "Leandro"},
       {name: "Bbzao"},
       {name: "Tocha"},
       {name: "Tio"},
       {name: "Pira"},
       ]; 

app.get("/", function(req, res){
   res.render("home") 
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    friends.push({name: req.body.nome});
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server running!"); 
});