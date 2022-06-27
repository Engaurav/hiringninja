// fetching models
const Batch = require('../models/batch');
const Student = require('../models/student');
const Scores = require('../models/scores');

// controller for adding new student
module.exports.addStudent = async (req,res) => {
    try {

        // checking new student with email is already registered or not
        Student.findOne({email:req.body.email},(err,student)=>{
            if(err){
                console.log('Error in finding email for new Student',err);
                return;
            }
            // if student with email found return from here
            if(student){
                req.flash("error","Student with this email is Already Registered");
                return res.redirect('back');
            }
        })

        
        // finding batch is already registered or not
        Batch.findById(req.body.batch,(err,batch)=>{
            if(batch){

                // registering new user
                Student.create(req.body,(err,student)=>{
                    if(err){
                        console.log(`Error in creating Student ${err}`);
                    }

                    // storing new user in batch
                    batch.students.push(student);
                    batch.save();

                    Scores.create(req.body,(err,score)=>{
                        if(err){
                            console.log(`Error in creating score of Student ${err}`);
                        }
    
                        score.student = student;
                        score.save();
                        student.scores = score;
                        student.save();
                    })
                    req.flash("success","Student is Added");
                    return res.redirect('back');
                })
            }else{                  //if batch not found
                req.flash("error","Batch is not register");
                return res.redirect('back');
            }
        })

        
    } catch (error) {
        console.log(`Error in addStudent Controller ${error}`)
    }
}


// controller for deleting a student from batch
module.exports.deleteStudent = (req,res) => {
    try {
        
    } catch (error) {
        console.log(`Error in deleteStudent Controller ${error}`)
    }
}