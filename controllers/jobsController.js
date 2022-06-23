const Company = require('../models/company');

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