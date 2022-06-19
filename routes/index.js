const router = require('express').Router();

// requiring home controller for adding modules in diffrent routes
const homeController = require('../controllers/homeController')


// roter for home page
router.get('/',homeController.students);




// routes for user login register and logut
router.use("/user", require("./user"));










// exporing router to index
module.exports = router;