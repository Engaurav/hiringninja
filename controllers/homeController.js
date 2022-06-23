// requiring all models
const Batch = require('../models/batch');
const Student = require('../models/student');


// list of students in home page
module.exports.students =async (req,res) => {
    try {

        // fetching all batches
        const batch =await Batch.find({})
        console.log(batch)

        // fetching all students
        const student = await Student.find({}).populate('batch');

        return res.render('home',{
            title : 'Placement',
            batches : batch,
            students : student,
            student_index : 1
        });

    } catch (error) {
        console.log(`Error in home controller ${error}`)
    }
   
}


// controller for adding new batch
module.exports.addBatch = async (req,res) => {
    try {
        Batch.create(req.body,(err,batch)=>{
            if(err){
                console.log(`Error in creating Batch ${err}`);
                return;
            }
            req.flash("success","Batch is Created");
            return res.redirect('back');
        })
        
    } catch (error) {
        console.log(`Error in addBatch Controller ${error}`)
    }
}


// page 404
module.exports.page404 = `<!DOCTYPE html>
<html lang="en">


    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Error</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>


    <body>
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <a href="/" class="btn btn-primary">Go Home</a>
            </div>
        </div>
    </body>


</html>`;