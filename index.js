// require this to add .env file values  in our project
require("dotenv").config();
// require express to setup project
const express = require("express");
const app = express();






// calling all the routes using use middleware
app.use('/',require('./routes/index'));



// server is running using express
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error in running Node Server`);
    return;
  }
  console.log(`Sever is running on port : ${process.env.PORT}`);
});
