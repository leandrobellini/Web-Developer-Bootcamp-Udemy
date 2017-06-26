var colors = generateRandomColors(6);

//All elements of the HTML file
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

//Shows the right color to the user
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listener to squares
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;

    //compare color to pickedColor
    if(clickedColor === pickedColor){
      msgDisplay.textContent = "Correct!";
      changeColors(pickedColor);
      h1.style.backgroundColor = pickedColor;
    }else{
      this.style.backgroundColor = "#232323";
      msgDisplay.textContent = "Try Again!";
    }
  });
}

//change all squares color when clicked in the right square
function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

//pick a color in our colors vetor
function pickColor(){
    var num = Math.floor(Math.random() * colors.length);
    return colors[num];
}

//pick an array of random colors
function generateRandomColors(num){
  //make an array
  var arr = [];
  for(var i = 0; i < num; i++){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var myRGB = "rgb("+ r + ", "+ g + ", "+ b +")";
    arr.push(myRGB);
  }

  return arr;
}
