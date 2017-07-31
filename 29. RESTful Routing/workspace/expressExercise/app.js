var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res){
   var animal = req.params.animal;
   
   if(animal === "pig"){
       res.send("The pig says 'Oink'");
   }else if(animal === "cow"){
       res.send("The cow says 'Moo'");
   }else if(animal === "dog"){
       res.send("The dog says 'Woof Woof'");
   }else{
        res.send("I don't know this animal!");
   }
});

app.get("/repeat/:num", function(req, res) {
   var num = req.params.num;
   var resposta = "";
   
   for(var i=0; i < num; i++){
       resposta += "Hello ";
   }
   res.send(resposta);
});

app.get("*", function(req, res) {
    res.send("I don't know!");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Servidor iniciado!");
});