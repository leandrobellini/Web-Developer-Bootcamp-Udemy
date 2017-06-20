//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

var amigos = ["Leandro", "Tocha", "Ivan"];

amigos.pop(); //remove de last

amigos.shift(); //remove the first

amigos.unshift("Begin"); //push at begin

amigos.push("End"); //push at end


for(var i = 0; i < amigos.length; i++){
  alert(amigos[i]);
}

console.log(amigos.indexOf("Tocha"));

console.log(amigos.indexOf("Abacate"));

var part = amigos.slice(1,3); //get a new array from these positions

console.log(part);

var two = [["Leandro", "Fernando"],["Bellini", "Pereira"]];
alert(two[0][1] + " " + two[1][1]);
