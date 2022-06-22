// calling express server
const express = require("express");
const router = express.Router(); //fetching router

// fetching passport to authenticate
const passport = require("passport");

// fetching job contreoller
const jobController = require('../controllers/jobsController')

// roter for fetching all the companies
router.get("/lists",jobController.companiesLists)


module.exports = router;
