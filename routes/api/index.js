// calling express server
const express = require("express");
const router = express.Router(); //fetching router

// fetching passport to authenticate
const passport = require("passport");

// fetching job contreoller
const interviewAPI = require('../../controllers/api/interviewApi');

router.get('/interview/:id/companies',interviewAPI.CompanyListSendApi);


module.exports = router;
