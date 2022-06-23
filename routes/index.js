const router = require('express').Router();


// fetching passport to authenticate
const passport = require("passport");

// requiring home controller for adding modules in diffrent routes
const homeController = require('../controllers/homeController')


// roter for home page
router.get('/',homeController.students);

// router for adding new batch
router.post('/add/batch',passport.authenticate("local", { failureRedirect: "/user/login" }),homeController.addBatch);




// routes for user login register and logout
router.use("/user", require("./user"));


// routes for student links
router.use("/student", require("./student"));


// rotes for company related links
router.use("/jobs", require("./jobs"));







router.all("*",(req,res)=>{
    return res.send(homeController.page404)
})



// exporing router to index
module.exports = router;