const router = require('express').Router();

// requiring home controller for adding modules in diffrent routes
const homeController = require('../controllers/homeController')


// roter for home page
router.get('/',homeController.students);










// exporing router to index
module.exports = router;