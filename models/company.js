const mongoose = require("mongoose");

// multer for uploading files
const multer  = require('multer');
const path = require('path');
// path for saving uploads
const LOGO_PATH = path.join('/uploads/company/logo');

// company schema
const companySchema = new mongoose.Schema({
    name : {
        type: String,
        required:true,
    },
    technology : {
        type: String,
        required: true
    },
    logo : {
        type: String
    },
    pay : {
        type : String,
        required: true
    },
    deadline : {
        type: Date,
        required: true
    },
    location : {
        type : String,
        required: true
    },
    students : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    interview : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interview'
    }]
},{
    timestamps: true
})

// setting up multer
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../', LOGO_PATH))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  

//   static methods
companySchema.statics.uploadLogo = multer({ storage: storage }).single('logo');
companySchema.statics.LOGO_PATH = LOGO_PATH;


const Company = mongoose.model('Company',companySchema);  //telling mogoose that this is model or schema

module.exports = Company;