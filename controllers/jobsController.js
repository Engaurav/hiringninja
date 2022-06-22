

//controller for fetching all jobs
module.exports.companiesLists= async (req,res) => {
    try {
        return res.render("jobs", {
            title : 'Jobs'
        });
        
    } catch (error) {
        console.log(`Error in Companies List Controller ${error}`);    
    }
}