// requiring all models
const Batch = require('../models/batch');
const Student = require('../models/student');


// list of students in home page
module.exports.students =async (req,res) => {
    try {

        // fetching all batches
        const batch =await Batch.find({})
        console.log(batch)

        // fetching all students
        const student = await Student.find({}).populate('batch');

        return res.render('home',{
            title : 'Placement',
            batches : batch,
            students : student,
            student_index : 1
        });

    } catch (error) {
        console.log(`Error in home controller ${error}`)
    }
   
}


// controller for adding new batch
module.exports.addBatch = async (req,res) => {
    try {
        Batch.create(req.body,(err,batch)=>{
            if(err){
                console.log(`Error in creating Batch ${err}`);
                return;
            }
            req.flash("success","Batch is Created");
            return res.redirect('back');
        })
        
    } catch (error) {
        console.log(`Error in addBatch Controller ${error}`)
    }
}


