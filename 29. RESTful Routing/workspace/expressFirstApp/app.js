var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hello!");
});

app.get("/nameinteiro", function(req, res) {
   res.send("Nome inteiro"); 
});


app.get("/name", function(req, res){
    res.send("Leandro Bellini");
});

app.get("/r/:subreddit/comments/:id/:title", function(req, res) {
    var subreddit = req.params.subreddit;
    var id = req.params.id;
    var title = req.params.title;
    
    res.send("reddit => " + subreddit + " => " + id + " => " + title + "<br> +" + req.params); 
    console.log(req);
});

app.get("*", function(req, res) {
    res.send("404 Not Found!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});