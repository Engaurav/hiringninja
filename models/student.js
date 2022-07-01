const mongoose = require("mongoose");


// creating student schema
const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true,
    },
    gender : {
        type: String,
        required: true
    },
    email : {
        type: String,
        unique: true,
        required: true
    },
    college : {
        type : String,
        required: true
    },
    status : {
        type: Boolean,
        default: false
    },
    batch : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch'
    },
    interview : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Interview'
    }],
    companies : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company'
    }],
    scores : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scores'
    },
},{
    timestamps: true
})


const Student = mongoose.model('Student',studentSchema);  //telling mogoose that this is model or schema

module.exports = Student;