var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var display1 = document.getElementById("display1");
var display2 = document.getElementById("display2");
var displayPlaying = document.getElementById("displayPlaying");
var inputWin = document.getElementById("inputWin");

var score1 = 0;
var score2 = 0;

var gameOver = false;
var winningScore = 5;

p1.addEventListener("click", function(){
  if(!gameOver){
    score1++;
    display1.textContent = score1;
    if(score1 == winningScore){
      gameOver = true;
      display1.classList.add("winner");
    }
  }else{
    alert("Game Over! Reset the game!");
  }
});

p2.addEventListener("click", function(){
  if(!gameOver){
    score2++;
    display2.textContent = score2;
    if(score2 == winningScore){
      gameOver = true;
      display2.classList.add("winner");
    }
  }else{
    alert("Game Over! Reset the game!");
  }
});

reset.addEventListener("click", function(){
  score1 = 0;
  score2 = 0;
  display1.textContent = "0";
  display2.textContent = "0";
  gameOver = false;

  display1.classList.remove("winner");
  display2.classList.remove("winner");

  winningScore = Number(inputWin.value);

  displayPlaying.textContent = winningScore;
});
