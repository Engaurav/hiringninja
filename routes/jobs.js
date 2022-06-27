// calling express server
const express = require("express");
const router = express.Router(); //fetching router

// fetching passport to authenticate
const passport = require("passport");

// fetching job contreoller
const jobController = require('../controllers/jobsController');

// roter for fetching all the companies
router.get("/lists",jobController.companiesLists);

// roter for adding new  company
router.post("/add/company",jobController.addCompany);

// router for viewing the company
router.get("/view/company/:id",jobController.companiesDataView);

// router for downloading csv of the company
router.get("/view/company/:id/csv",jobController.exportsComapnyCSV);


module.exports = router;
