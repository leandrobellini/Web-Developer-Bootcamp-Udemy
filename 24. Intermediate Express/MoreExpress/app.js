var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.send("Hello"); 
});

app.get("/posts", function(req, res){
    var dados = [
        {title: "New post here!"},
        {title: "This is another post!"},
        {title: "Ok, this is a post!"}];
        
    res.render("somar", {dados: dados});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
}); 