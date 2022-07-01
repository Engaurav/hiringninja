const mongoose = require("mongoose");

// creatung scores schema
const scoresSchema = new mongoose.Schema({
    dsa : {
        type: Number,
        required:true,
    },
    webd : {
        type: Number,
        required: true
    },
    react : {
        type : Number,
        required: true
    },
    student : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
},{
    timestamps: true
})


const Scores = mongoose.model('Scores',scoresSchema);  //telling mogoose that this is model or schema

module.exports = Scores;