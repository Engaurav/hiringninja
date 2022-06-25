// calling express server
const express = require("express");
const router = express.Router(); //fetching router

// fetching passport to authenticate
const passport = require("passport");

// calling controller
const interviewController = require('../controllers/interviewController');

// roter for adding new  company
router.post("/add",interviewController.addInterview);


module.exports = router;
