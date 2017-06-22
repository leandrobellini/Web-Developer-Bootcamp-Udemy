//console.dir(document)
var h1 = document.querySelector("h1");
var isBlue = false;

console.log(h1.textContent);
//tag.textContent
//h1.innerHTML

setInterval(function(){
  if(isBlue){
    h1.style.color = "red";
    isBlue = false;
  }else{
    h1.style.color = "blue";
    isBlue = true;
  }

}, 500);


var link = document.querySelector("a");
var l = link.getAttribute("href");

console.log("Link ->  " + l);

link.setAttribute("href", "http://fb.com");

l = link.getAttribute("href");

console.log("Link ->  " + l);

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

//add and remove class
el.classList.remove("classe");
el.classList.add("outra classe");

el.classList.toggle("claase"); //remove se jah existir a classe... add se nao tiver!

el.textContent


//
