var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/yelp_camp");

//database

    //schema
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

    //Model
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create( 
//     {
//         name: "Camp Ribeirao", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
//         description: "O melhor da cidade!"
//     },
//     function(err, campground){
//         if(err){
//             console.log("Error while trying to add new Campground");
//         }else{
//             console.log("Add!");
//             console.log(campground);
//         }
//     });

app.get("/", function(req, res){
   res.render("landing"); 
});


app.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log("Error in the DataBase");
        }else{
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
    
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new"); 
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCamp = {name: name, image: image, description: description};
    
    //create new campground and save to the DB
    Campground.create(newCamp, function(err, addCampground){
        if(err){
            console.log("Error while trying to add new campground");
        }else{
            console.log(addCampground);
        }
    });
    
    res.redirect("/campgrounds");
});

app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log("error when find a campground");
        }else{
            res.render("show", {campground: foundCampground});
        }
    });
    
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server listen..."); 
});