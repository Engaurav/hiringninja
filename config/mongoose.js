// calling mongoose to setup database
const mongoose = require("mongoose");

// calling cloud mongo url from env variable
const nodeAuthCloudDB = process.env.MONGO_URL;
mongoose.connect(nodeAuthCloudDB);

// establishing connection
const db = mongoose.connection;

// if any error occur during connection
db.on("err", console.error.bind(console, "Error in Connection of DB"));

// if database connection established
db.once("open", function () {
  console.log("Connected to Database");
});

// exporting database
module.exports = db;
