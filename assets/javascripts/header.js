



// function to handle profile pic button
let showProfile = false;
function showProfileDropdown(){
    let profileDropdown = document.getElementById("nav-profile-dropdown");
    
    if(showProfile){
        profileDropdown.style.display = "none";
        showProfile = false
    }else{
        profileDropdown.style.display = "block";
        showProfile = true;
    }

}

// function to handle sidebar button
let showSide = false;
async function showSideBar(){
    let sidebar = document.getElementById("sidebar");
    let navLinks = document.getElementById("nav-links");
    let navProfile = document.getElementById("nav-profile");



    if(showProfile){
        sidebar.style.display = "none";
        navProfile.style.display = "none";
        navLinks.style.display = "flex";

        showProfile = false
    }else{
        navProfile.style.display = "block";
        sidebar.style.display = "block";
        navLinks.style.display = "none !important";
        showProfile = true;
    }

}