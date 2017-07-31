var express = require("express");
var app = express();
var request = require('request');

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/movies", function(req, res){
    var movieName = req.query.movieName;
    
    var url = "http://www.omdbapi.com/?s=" + movieName + "&apikey=thewdb";
    
    request(url, function (error, response, body) {
      var resposta = JSON.parse(body);
      
      res.render("movies", {movies: resposta.Search})
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!");
});