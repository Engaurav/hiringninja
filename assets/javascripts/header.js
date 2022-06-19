



// function to handle profile pic button
let showProfile = false;
function showProfileDropdown(){
    let profileDropdown = document.getElementById("nav-profile-dropdown");
    
    if(showProfile){
        profileDropdown.style.height = "0px";
        showProfile = false
    }else{
        profileDropdown.style.height = "80px";
        showProfile = true;
    }

}