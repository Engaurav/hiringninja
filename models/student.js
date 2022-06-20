const mongoose = require("mongoose");

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
},{
    timestamps: true
})


const Student = mongoose.model('Student',studentSchema);  //telling mogoose that this is model or schema

module.exports = Student;