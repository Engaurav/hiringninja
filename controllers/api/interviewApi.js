// models fetched
const Student = require('../../models/student');
const Company = require('../../models/company');

module.exports.CompanyListSendApi = async (req,res) => {
    let id = req.params.id;
    // console.log("id",id)
    let student = await Student.findById(id);
    let company = await Company.find( { _id: { $nin: student.companies } } )
    // console.log(student)

    return res.json(200,{
        messgae : "Company Data",
        company
    })
    
}