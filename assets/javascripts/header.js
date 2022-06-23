
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



    if(showSide){
        sidebar.style.display = "none";
        navLinks.style.left = "-100%";
        if(navProfile){
            navProfile.style.display = "none";
        }

        showSide = false
    }else{
        if(navProfile){
            navProfile.style.display = "block";
        }
        sidebar.style.display = "block";
        navLinks.style.left = "0";
        showSide = true;
    }

}