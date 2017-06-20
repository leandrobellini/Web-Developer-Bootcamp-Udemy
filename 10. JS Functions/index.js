function isEven(x){
  var numero = Number(x);

  if((numero % 2) == 0){
    alert("Even!");
  }else{
    alert("Not even!");
  }
}

function factorial(x){
  var numero = Number(x);
  var caixa = 1;

  if(numero == 0){
    alert("0! is 1");
  }else if(numero < 0){
    alert("Entre com um positivo!")
  }else{
    var resultado = numero + "! is ";
    while(numero > 1){
      resultado = resultado + numero + " x ";
      caixa = caixa*numero;
      numero--;
    }
    resultado = resultado + " 1";
    alert(resultado);
    alert(caixa);
  }
}

var x =  prompt("Entre com um numero");
isEven(x);
factorial(x);
