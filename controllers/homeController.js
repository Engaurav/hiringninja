// home controller

// list of students in home page
module.exports.students = (req,res) => {
    return res.render('home',{
        title : 'Placement'
    });
}


