const dotenv = require('dotenv');
const express = require("express");
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
const mongoose = require('mongoose');
// const authenticate = require ('../server')
// const port = process.env.PORT || 5000;

dotenv.config({path:'./config.env'});

require('./db/conn');

app.use(express.json());
//convert json format into object format
app.use(require('./router/auth'));
//link router files to route

const PORT = process.env.PORT || 5000;

// //middleware
// const middleware = (req,res,next) =>{
// console.log(' this is middleware');
//    next();
// }

// app.get('/', (req,res) => {
//     res.send("Welcome to Happytrip");
// });

// app.get('/about', (req,res) => {
//     res.cookie("test","about cookie");
//     res.send("Welcome to about");
// });

// app.get('/login', (req,res) => {
   
//     console.log('This is login form');
//     res.send("Welcome to login page");
//  });

app.get('/register',  (req,res) => {
    console.log('This is regitration form');
    res.send("Welcome to registration page");
 });

//heroku step
if(process.env.NODE_ENV == "production") {
    app.use(express.static("rproject/build"));
    
}


app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);

});