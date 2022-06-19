// home controller

// list of students in home page
module.exports.students = (req,res) => {
    return res.render('home',{
        title : 'Placement'
    });
}


module.exports.login = (req,res) => {
    return res.render('login',{
        title : 'Login'
    });
}