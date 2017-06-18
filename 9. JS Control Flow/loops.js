var init;

console.log("all numbers between -10 and 19");

init = -10;

while(init <= 19){
  console.log(init);
  init++;
}

console.log("all even numbers between 10 and 40"); //pares

init = 10;

while(init <= 40){
  if((init % 2) == 0){
    console.log(init);
  }
  init++;
}


console.log("all odd numbers between 300 and 333"); //ímpares

init = 300;

while(init <= 333){
  if((init % 2) == 1){
    console.log(init);
  }
  init++;
}


console.log("all numbers divisible by 5 and 3 between 5 and 50"); //pares

init = 5;

while(init <= 50){
  if((init % 5) == 0 && (init % 3) == 0){
    console.log(init);
  }
  init++;
}

console.log("----------------");

//indexOf

var name = "Leandro Bellini";

console.log(name.indexOf("Bellini"));


for(var i = 0; i < 10; i++){
  console.log("Hey");
}
