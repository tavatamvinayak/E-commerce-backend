// // imports
const express = require('express');
const cors =require('cors')

const cookieParser = require("cookie-parser");
const app = express();

const Port = process.env.PORT || 8080 

// // db connect
const dbconnect = require('./db')
dbconnect();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

// // routes
app.use('/signup', require('./routes/Signup'));
app.use('/login', require('./routes/Login'));

// /// // CURD 
app.use('/product',require('./CURD/CreateProduct'));  // // post     //  create Notes
app.use('/product',require('./CURD/ReadProduct'));    // // get      //  read notes
app.use('/product',require('./CURD/UpdateProduct'));  // // put      //  update notes
app.use('/product',require('./CURD/DeleteProduct'));  // // delete   //  delete notes/


// order 
app.use("/product",require("./routes/order"))

// Search 
app.use('/search',require("./routes/Search"))

// product id and details
app.use('/product',require("./routes/productDetails"))



/// Cart 
app.use('/cart', require("./routes/cart/cart"));

// cart RUD 
app.use('/cart', require("./Cart URD/ReadCart"))
app.use('/cart',require("./Cart URD/UpdateCart"))


app.get('/data',(req,res)=>{
    res.json({name:"vishal" , last:"tavatam"})
    console.log("data sended success ")
})


app.listen(Port,()=>{
    console.log("8080");
})