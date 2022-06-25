// calling express server
const express = require("express");
const router = express.Router(); //fetching router

// fetching passport to authenticate
const passport = require("passport");

// fetching job contreoller
const jobController = require('../controllers/jobsController')

// roter for fetching all the companies
router.get("/lists",jobController.companiesLists)

// roter for adding new  company
router.post("/add/company",jobController.addCompany)


module.exports = router;
