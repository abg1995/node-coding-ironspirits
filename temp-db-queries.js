const mongoose = require('mongoose')
const Schema =mongoose.Schema;

mongoose
.connect('mongodb://localhost/ironborn-ecommerce')
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err));




// const productSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     price: {
//         type: Number,
//         min: 1
//     },
//     hasStock: {
//         type: Boolean,
//         default: true
//     },
//     tags: {
//         type: [String],
//         enum: ["spirits", "drink", "italian", "japanise", "best-sellers"]
//     },
//     imgSrc: {
//         type: String,
//         default: "https://via.placeholder.com/700x400"
//     }


// });



// const Product = mongoose.model('Product', productSchema);

// Product.create({title: 'tequila', price: 50})
// .then(product => console.log("a new product was created", product))
// .catch((error) => {console.log("error creatinng a product in db", error)})

// Product.create({title: 'cognac', price: 35, hasStock: true, tags: ['spirits','drink']})
// .then(product => console.log("a new product was created", product))
// .catch((error) => {console.log("error creatinng a product in db", error)})
// Product.create({title: 'whiskey', price: 105})
// .then(product => console.log("a new product was created", product))
// .catch((error) => {console.log("error creatinng a product in db", error)})

// Product.find()
//     .then( (allProducts) => {
//         console.log(allProducts)
//     })
//     .catch(error => console.log('error getting  products from DB', error))

// Product.find( {price:{ $gt:30 } })
// .then(productArr => console.log("the products are", productArr))
// .catch(error => console.log("there was an oopsie...",error))

// Product.updateOne({title:"whiskey"},{price:110})
// .then( response => console.log('price updated to', response))
// .catch(error => console.log("there is an error",error))


Product.deleteOne({ title: "tequila"})
.then(response => console.log("object deleted"))
.catch(error => console.log('errroooorrr', error))