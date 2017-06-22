//console.dir(document)
var h1 = document.querySelector("h1");
var isBlue = false;

setInterval(function(){
  if(isBlue){
    h1.style.color = "red";
    isBlue = false;
  }else{
    h1.style.color = "blue";
    isBlue = true;
  }

}, 500);


/*
document.getElementById(  );

document.getElementsByClassName(  );

document.getElementsByTagName(  );

document.querySelector( );  -> return the first element that
                                matches a given CSS-style selector

document.querySelectorAll(  );
*/


el = document.getElementById("elemento");

console.log(typeof(el));

console.log(el);
