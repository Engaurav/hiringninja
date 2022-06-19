// require this to add .env file values  in our project
require("dotenv").config();
// require express to setup project
const express = require("express");
const app = express();
const expressLayout = require('express-ejs-layouts');  //for creating partial in express
const mongoose = require("./config/mongoose"); // Calling Mongoose Config File for Database
const sassMiddleware = require('node-sass-middleware')





//for scss middleware
app.use(sassMiddleware({
    src:  './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));


// this is to use our post data of form
app.use(express.urlencoded());



// connect static directory
app.use(express.static('./assets'));



// calling partial middleware
app.use(expressLayout);




//extract style and script from webpages into the layout
app.set('layout extractStyles', true)
app.set('layout extractScripts', true)


//setting up our view engine for ejs
app.set("view engine", "ejs");
app.set("views", "./views");


// calling all the routes using use middleware
app.use("/", require("./routes/index"));

// server is running using express
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error in running Node Server`);
    return;
  }
  console.log(`Sever is running on port : ${process.env.PORT}`);
});
