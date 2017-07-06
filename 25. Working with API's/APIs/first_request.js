var request = require('request');

request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
    if(error){
        console.log("Error!");
    }else{
        if(response.statusCode == 200){
            console.log('body:', body); // Print the HTML for the Google homepage.
            console.log("Tudo ok!");
            
            var sunset = JSON.parse(body);
            
            //body: {"query":{"count":1,"created":"2017-07-06T19:54:22Z","lang":"en-US","results":{"channel":{"astronomy":{"sunset":"7:11 pm"}}}}}
            console.log(sunset["query"]["results"]["channel"]["astronomy"]["sunset"]);
        }else{
            console.log("Resposta com erro!");
        }
    }
});
