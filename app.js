const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const app = express();


app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));


mongoose
    .connect('mongodb://localhost/ironborn-ecommerce')
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

/* Routes */

app.get("/", (req, res, next)=>{
    res.render("home");
});


app.get("/about", (req, res, next) => {
    res.render("about");
});


app.get("/contact", (req, res, next) => {
    res.render("contact");
});

app.get("/products", (req, res, next) => {
    res.render("products");
});



app.get("/limoncello", (req, res, next) => {
    Product.findOne({title:'Limoncello'})
    .then((productDetails) => {
        res.render("product",productDetails);
    })
    .catch( error => console.log(error))
});

app.get("/whiskey", (req, res, next) => {
    Product.findOne({title:'Single Malt Whisky Yamakazi'})
    .then((productDetails) => {
        res.render("product",productDetails);
    })
    .catch( error => console.log(error))
});

app.get("/tequila", (req, res, next) => {
    Product.findOne({title:'Tequila Don Julio'})
    .then((productDetails) => {
        res.render("product",productDetails);
    })
    .catch( error => console.log(error))});







app.listen(3001, () => {
    console.log("server listening to requests...")
});


