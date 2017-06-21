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

amigos.forEach(function(c){
  console.log(c);
});

//vê se todos elementos do array sao iguais! Se sim... retorna true
function isUniform(vetor){
   	var primeiro = vetor[0];
    var teste = true;
    vetor.forEach(function(elemento){
        if(elemento !== primeiro){
            teste =  false;
        }
    })
    return teste;
};

//retorna a soma dos elementos do vetor
function soma(vetor){
	var sum = 0;
    vetor.forEach(function(x){
        sum += x;
    });
	return sum;
};



//retorna o maior valor de um array
function max(vetor){
    var num = vetor[0];
    vetor.forEach(function(x){
        if(x > num)
            num = x;
    });
    console.log("Maior valor: " + num);
};
