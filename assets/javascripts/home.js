




// javascript to open batch form on click add button
function openAddBatchForm(){
    document.getElementById("batch-container").style.display = "block";
}
// javascript to close batch form on click add button
function closeAddBatchForm(){
    document.getElementById("batch-container").style.display = "none";
}




// javascript to open student form on click add button
function openAddStudentForm(){
    document.getElementById("add-student-container").style.display = "block";
}
// javascript to close student form on click add button
function closeAddStudentForm(){
    document.getElementById("add-student-container").style.display = "none";
}




// javascript to open interview form on click add button
async function openAddInterviewForm(studedentID,studentName){
    let interviewHTML = `<div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>`
  
    let formContainer = document.getElementById("interview-pass-data-from-js");
    formContainer.innerHTML = interviewHTML;
    document.getElementById("interview-form-container").style.display = "block";

    let url = `http://localhost:8000/api/interview/${studedentID}/companies`;
    let companyData = [];

    await $.ajax({
        type: 'get',
        url: url,
        success: function (data) {
            console.log(data);
            companyData = data.company;
        }, error: function (error) {
            console.log(error.responseText);
        }
    });
    console.log(companyData)

    interviewHTML =await `
                        <input type="text" name="student" value=${studedentID} hidden>
                        <div class="onwidth form-outline p-2 d-flex justify-content-between">
                            <label class="onwidth form-label">Student</label>
                            <input type="text" name="student_name" class="onwidth form-control form-control-sm w-75" value="${studentName}" readonly required/> 
                        </div>

                        <div class="onwidth form-outline p-2 d-flex justify-content-between">
                            <label class="onwidth form-label">Company</label>
                            <select id ="company-options" class="onwidth form-select form-select-sm w-75" name="company">
                            </select>
                        </div>
                        <div class="onwidth form-outline p-2 d-flex justify-content-between">
                            <label class="onwidth form-label">Date</label>
                            <input type="date" name="date" class="onwidth form-control form-control-sm w-75" required/> 
                        </div>

                        `
    formContainer.innerHTML = interviewHTML;
    let options = document.getElementById("company-options");
    if(companyData.length <=0 ){
        formContainer.innerHTML  = `Already Registered in all Companies.`
    }
    companyData.map((company,index) => {
        let optionHTML = `<option value="${company._id}">${company.name}</option>`;
        options.innerHTML += optionHTML;
    })
}
// javascript to close interview form on click add button
function closeAddInterviewForm(){
    document.getElementById("interview-form-container").style.display = "none";
}