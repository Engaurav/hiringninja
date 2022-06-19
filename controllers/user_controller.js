const User = require("../models/user");

//controller to handle signIn route
module.exports.login = async (req, res) => {
  try {
    return res.render("login", {
      title : "Login"
    });
  } catch (error) {
    console.log(`Error in SignIn Controller ${error}`);
  }
};

//controller to handle signUp route
module.exports.register = async (req, res) => {
  try {
 
    return res.render("register", {
      title : "Register"
    });
  } catch (error) {
    console.log(`Error in SignUp Controller ${error}`);
  }
};

