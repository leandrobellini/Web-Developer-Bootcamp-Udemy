var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//http://www.photosforclass.com/
var campgrounds = [
    {name: "Camp Ribeirao", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "Sao Carlos", image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg"},
    {name: "Campinas camp", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
    {name: "Camp Ribeirao", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "Sao Carlos", image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg"},
    {name: "Campinas camp", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
    {name: "Camp Ribeirao", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "Sao Carlos", image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg"},
    {name: "Campinas camp", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"}
    ];

app.get("/", function(req, res){
   res.render("landing"); 
});


app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new"); 
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name: name, image: image};
    
    campgrounds.push(newCamp);
    res.redirect("/campgrounds");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server listen..."); 
});