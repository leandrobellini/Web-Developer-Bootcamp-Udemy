var person = {
  name: "Leandro",
  age: 21,
  city: "Campinas",
  casas: [1,22,44],
  filho:{
    nome: "Junior",
    age: 8
  }
};

alert(person["name"] + " -> "+person["city"] + ": " + person.age);

person.age += 1;

alert(person.name + " -> "+ person.city  + ": " + person.age);

alert(person.filho.nome);

person.wife = "Evelise";
person["mother"] = "Lucia";

alert(person["wife"] + ", " + person.mother);

blogPosts = [
  {
    title: "Nao sei",
    author: "EU"
  },
  {
    title: "Outro",
    author: "Nao eu"
  }
];

alert(blogPosts[0].author);
alert(blogPosts[1].title);


var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"}
  ],
  color: "red"
};

alert(someObject.friends[0].name);

movies = [
  {
    Name: "Titanic",
    rating: 5,
    watched: "false"
  },
  {
    Name: "Titanic 2",
    rating: 3,
    watched: "true"
  },
  {
    Name: "Big boss",
    rating: 2,
    watched: "false"
  },
  {
    Name: "Pi",
    rating: 3.4,
    watched: "true"
  }
];

movies.forEach(function(movie){
  if(movie.watched === "true"){
    alert("You have watched " + movie.Name + " - " + movie.rating + " starts");
  }else{
    alert("You have not seen " + movie.Name + " - " + movie.rating + " starts");
  }
});

var comments = {
  data: ["Leandro", "Luis", "Bellini"]
};

comments.print = function(){
  this.data.forEach(function(el){ //this refers the objects data
    console.log(el);
  })
};

comments.print();
