var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

/*
In mongoose, a schema represents the structure of a particular document, either 
completely or just a portion of the document. It's a way to express expected 
properties and values as well as constraints and indexes. 
A model defines a programming interface for interacting with the database 
(read, insert, update, etc). 
So a schema answers "what will the data in this collection look like?" 
and a model provides functionality like "Are there any records matching this query?" 
or "Add a new document to the collection". 
stackoverflow.com/questions/22950282/schema-vs-model?lq=1
*/

var catSchema = new mongoose.Schema({ //padrao que um gato terá... nome, idade...
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema); //uso var Cat para add gatos, remover, atualizar... Métodos! 
//cria a collection cats   (se for dog, cria a collection dogs sozinho)
//Model tem nome maiusculo (Convensao)

//Schema -> estrutura do objeto... quais propriedades vou ter
//Model -> métodos para interagir com o banco

// *** add a new cat to the DB ***
// var king = new Cat({
//   name: "Kong",
//   age: 07,
//   temperament: "cute"
// });

// king.save(function(err, cat){
//     if(err){
//         console.log("Error while trying to add king");
//     }else {
//         console.log("Saved the cat king!");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Mimi",
    age: "11"
}, function(err, cat){  //cat eh o retorno do banco! Como q foi adicionado o dado
    if(err){
        console.log("error!");
    }else{
        console.log("Add: ");
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("Error to get all cats!");
    }else{
        console.log(cats);
    }
});