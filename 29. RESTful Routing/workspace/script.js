function echo(string, num){
    for(var i = 0; i < num; i++){
        console.log(string);
    }
}

echo("Hello!", 10);

var s = require("cat-me");

console.log(s());