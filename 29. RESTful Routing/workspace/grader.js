function avegare(vetor){
    var soma = 0;
    
    for(var i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }
    
    return Math.round(soma/vetor.length);
}

var scores = [90,98,89,100,100,86,94];
console.log(avegare(scores));

var scores2 = [40,65,77,82,80,54,73,63,95,49];
console.log(avegare(scores2));
