const Company = require('../models/company');
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
        for(student of company.students){
            csvStream.write({
                Student_Name: student.name ? student.name : "-",
                Gender : student.gender ? student.gender : "-",
                Email: student.email ? student.email : "-",
                College: student.college ? student.college : "-",
                DSA_Marks : student.scores.dsa ? student.scores.dsa : "-",
                WebD_Marks : student.scores.webd ? student.scores.webd : "-",
                React_Marks : student.scores.react ? student.scores.react : "-",
                Results : student.status ? 'Cleared' : "Not Cleared"
            });
        }
        
        csvStream.end();
        writableStream.end();
        // End : Creating CSV for a Company




        return res.render("company", {
            title : 'Company',
            company
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