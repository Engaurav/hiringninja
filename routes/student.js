// calling express server
const express = require("express");
const router = express.Router(); //fetching router

// fetching passport to authenticate
const passport = require("passport");

// fetching student controller
const studentController = require('../controllers/studentController');

// route to add a student
router.post('/addstudent',studentController.addStudent)


module.exports = router;
