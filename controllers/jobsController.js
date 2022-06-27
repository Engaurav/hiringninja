const Company = require('../models/company');
const Interview = require('../models/interview');

var fs = require("fs");
var csv = require("fast-csv");

//controller for fetching all jobs
module.exports.companiesLists= async (req,res) => {
    try {

        const company = await Company.find({});
        return res.render("jobs", {
            title : 'Jobs',
            companies : company
        });
        
    } catch (error) {
        console.log(`Error in Companies List Controller ${error}`);    
    }
}


// controller for adding new company
module.exports.addCompany = async (req,res) => {
    try {

        Company.uploadLogo(req,res,function(err){
            if(err){
                console.log('***Multer Error',err);
            }
            
            console.log(req.body.deadline);
            Company.create({
                name : req.body.name,
                technology : req.body.technology,
                logo : Company.LOGO_PATH + "/" + req.file.filename,
                pay : req.body.pay,
                deadline : req.body.deadline,
                location : req.body.location
            },(err,company)=>{
                if(err){
                    console.log('Error in Adding Company',err);
                }
                console.log(company);
                req.flash("success","Company is Added");
                return res.redirect('back');
            })
        });

        
        
    } catch (error) {
        console.log(`Error in addCompany  Controller ${error}`); 
    }
}




//controller for viewing single company detail
module.exports.companiesDataView= async (req,res) => {
    try {
        const id = req.params.id;
        const company = await Company.findById(id).populate({
            path : 'students',
            populate:{
                path : 'scores'
            }
        });

        const interview = await Interview.find({company:id}).populate({
            path : 'student',
            populate:{
                path : 'scores'
            }
        });

        // console.log(interview)
        

        // Start : Creating CSV for a company
        const csvStream = csv.format({ headers: true });
    
        if (!fs.existsSync("public/files/export/")) {
          if (!fs.existsSync("public/files")) {
            fs.mkdirSync("public/files/");
          }
          if (!fs.existsSync("public/files/export/")) {
            fs.mkdirSync("./public/files/export/");
          }
        }
    
        const writableStream = fs.createWriteStream(
          `public/files/export/${company.name}.csv`
        );
    
        csvStream.pipe(writableStream);
    
        // Writing our csv data
        for(i of interview){
            csvStream.write({
                Student_Name: i.student.name ? i.student.name : "-",
                Gender : i.student.gender ? i.student.gender : "-",
                Email: i.student.email ? i.student.email : "-",
                College: i.student.college ? i.student.college : "-",
                DSA_Marks : i.student.scores.dsa ? i.student.scores.dsa : "-",
                WebD_Marks : i.student.scores.webd ? i.student.scores.webd : "-",
                React_Marks : i.student.scores.react ? i.student.scores.react : "-",
                Results : i.result ? i.result : "-"
            });
        }
        
        csvStream.end();
        writableStream.end();
        // End : Creating CSV for a Company




        return res.render("company", {
            title : 'Company',
            company,
            interviews : interview
        });
        
    } catch (error) {
        console.log(`Error in Companies View Controller ${error}`);  
        req.flash("error","Company is not Added") 
        return res.redirect('/jobs/lists'); 
    }
}


// exporting csv files for a company
module.exports.exportsComapnyCSV =async (req,res) => {
    try {

        
        
        
    } catch (error) {
        console.log(`Error in exporting CSV ${error}`);  
        req.flash("error","CSV is not Exported") 
        return res.redirect('/jobs/lists'); 
    }
}