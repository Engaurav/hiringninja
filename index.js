// require this to add .env file values  in our project
require("dotenv").config();
// require express to setup project
const express = require("express");
const app = express();
const expressLayout = require('express-ejs-layouts');  //for creating partial in express
const mongoose = require("./config/mongoose"); // Calling Mongoose Config File for Database
const sassMiddleware = require('node-sass-middleware')
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const passportGoogle = require("./config/passport-google-oauth2-strategy");
// used for session cookie
const session = require("express-session"); //express-session automticially encrypt data and send to cookie
const MongoStore = require("connect-mongo");

// using flash for notifation
const flash = require("connect-flash");
const customMWare = require("./config/middleware");
const path = require('path')




//for scss middleware
app.use(sassMiddleware({
    src:  './assets/scss',
    dest: './assets/css',
    debug: false,
    outputStyle: 'extended',
    prefix: '/css'
}));


// session middleware
app.use(
  session({
    name: "hiringninja",
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false, //if !user we dont save any data to cookie
    resave: false, //if user is there we want rewrite if no data change
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl: process.env.MONGO_DB,
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect mongo db setup ok ");
      }
    ),
  })
);



// we are telling app to use passport
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// using flash notification in session cookie
app.use(flash());
app.use(customMWare.setFlash);





// this is to use our post data of form
app.use(express.urlencoded());



// connect static directory
app.use(express.static('./assets'));
// connecting upload path
app.use('/uploads',express.static(__dirname + '/uploads'));


app.use("/files", express.static(path.join(__dirname, "public/files")));



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
