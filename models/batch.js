const mongoose = require("mongoose");

// batch schema
const batchSchema = new mongoose.Schema({
    batch : {
        type: String,
        required:true
    },
    students : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }]
},{
    timestamps: true
})



const Batch = mongoose.model('Batch',batchSchema);  //telling mogoose that this is model or schema

module.exports = Batch;