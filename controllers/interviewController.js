const Interview = require('../models/interview');
const Student = require('../models/student');
const Company = require('../models/company');


module.exports.addInterview = async (req,res) => {
    let student = await Student.findById(req.body.student);
    let company = await Company.findById(req.body.company);
    
    Interview.create({
        student : student,
        date: req.body.date,
        company : company
    },async (err,interview)=>{
        if(err){
            console.log(`Error in creating Add Interview ${err}`)
        }
        await student.interview.push(interview);
        await student.companies.push(company);
        student.save();
        await company.students.push(student);
        company.save();

    })
    
    req.flash("success","Interview Added")
    return res.redirect('back');
}