const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
    student : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    date : {
        type : Date,
        required: true
    },
    company : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    result : {
        type : String,
        default : "not-attempt",
        required: true
    }
},{
    timestamps: true
})


const Interview = mongoose.model('Interview',interviewSchema);  //telling mogoose that this is model or schema

module.exports = Interview;