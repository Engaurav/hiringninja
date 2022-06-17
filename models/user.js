const mongoose = require("mongoose");

const employSchema = new mongoose.Schema({
    email : {
        type: String,
        required:true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true,
    }
},{
    timestamps: true
})


const User = mongoose.model('User',employSchema);  //telling mogoose that this is model or schema

module.exports = User;