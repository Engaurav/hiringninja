const Interview = require('../models/interview');
const Student = require('../models/student');
const Company = require('../models/company');


// controller for adding interview
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
        await company.interview.push(interview);
        student.save();
        await company.students.push(student);
        company.save();

    })
    
    req.flash("success","Interview Added")
    return res.redirect('back');
}

// controller for adding result of an interview
module.exports.addInterviewResults = async (req,res) => {
    try {
        let interview =await Interview.findById(req.body.id);
        interview.result = req.body.result;
        if(req.body.result=='cleared'){
            let student = await Student.findById(req.body.s_id);
            student.status = true;
            student.save();
        }
        interview.save();
        req.flash("success","Interview Result Added")
        return res.redirect('back'); 
        
    } catch (error) {
        console.log(`Error in addInterviewResults Controller ${error}`)
    }
}

