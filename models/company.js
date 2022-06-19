const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name : {
        type: String,
        required:true,
    },
    technology : {
        type: String,
        required: true
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
},{
    timestamps: true
})


const Company = mongoose.model('Company',companySchema);  //telling mogoose that this is model or schema

module.exports = Company;