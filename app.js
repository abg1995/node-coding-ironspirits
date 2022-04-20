const express = require('express');
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));




/* Routes */

app.get("/", (req, res, next)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});


app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html');
});




app.get("/limoncello", (req, res, next) => {

    // res.render("view", info);

    const data = {
        title: "Limoncello",
        price: 20,
        imageFile: "limoncello.png",
        stores: ["Online","Madrid", "Amsterdam","Paris"]

    }

    res.render("product", data);
});

app.get("/whiskey", (req, res, next) => {


    const data ={
        title: "whiskey",
        price: 105,
        imageFile: "suntory-yamazaki.jpeg",
        stores: ["Online","Madrid", "Amsterdam","Paris"]
    }

    res.render("product",data);
});

app.get("/tequila", (req, res, next) => {

    const data = {
        title: "Tequila",
        price: 35,
        imageFile: "donjulio.jpeg",
        stores: ["Online","Madrid", "Amsterdam","Paris"]
    }

        res.render("product", data);
});







app.listen(3001, () => {
    console.log("server listening to requests...")
});


