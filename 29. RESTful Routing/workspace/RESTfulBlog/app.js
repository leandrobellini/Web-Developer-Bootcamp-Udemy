var express =       require("express"),
    app =           express(),
    bodyParser =    require("body-parser"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    mongoose =      require("mongoose");
    

//DataBase connect    
mongoose.connect("mongodb://localhost/restful_glob_app");

//APP config
app.set("view engine", "ejs");
app.use(express.static("public"));  //pasta a ser usada para arquivos publicos (css, js, imagens)
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


//MONGO SCHEMA config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,  //image: {type: String, default: "padrao.jpg"}
    body: String,
    created: {type: Date, default: Date.now}
});

//MONGO MODEL config
var Blog = mongoose.model("Blog",  blogSchema);

// Blog.create({
//     title: "Que dia lindo",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67GLfV2ki8FH_fPhBaTSIQFJOi5rkvhxhO-1_MavfrL2cB1lt",
//     body: "Nao muito a dizer!"
// });

//RESTful ROUTES
app.get("/", function(req, res) {
   res.redirect("/blogs"); 
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
       if(err){
           console.log("Error when trying to find blogs");
       } else{
           res.render("index", {blogs: blogs});
       }
    });
});

app.post("/blogs", function(req, res){
    //remove js to avoid XSS
    req.body.blog.body = req.sanitize(req.body.blog.body);
    
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("/blogs/new");
        }else{
            res.redirect("/blogs");
        }
    });
});

app.get("/blogs/new", function(req, res) {
   res.render("new"); 
});

app.get("/blogs/:id", function(req, res) {
   Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           console.log("No found!");
           res.redirect("/blogs");
       }else{
           res.render("show", {blog: foundBlog});
       }
   });
});

app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       }else{
           res.render("edit", {blog: foundBlog});
       }
    });
});

app.put("/blogs/:id", function(req, res){
    /* Blog.findByIdAndUpdate(id, newData, callBack) */ 
    
    //remove js to avoid XSS
    req.body.blog.body = req.sanitize(req.body.blog.body);
    
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
      if(err){
          res.redirect("/blogs");
      }else{
          res.redirect("/blogs/" + req.params.id);
      }
    });

});

app.delete("/blogs/:id", function(req, res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs");
        }
    })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("running...");
});