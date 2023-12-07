// Check if the user is logged in
function isLoggedIn() {
    // Replace this with your actual authentication check
    // For example, you might use cookies, session storage, or an authentication API
    return true; // Return true if the user is logged in, false otherwise
}

// Function to open the modal
function openModal() {
    if (isLoggedIn()) {
        document.getElementById("myModal").style.display = "block";
    } else {
        document.getElementById("loginMessage").style.display = "block";
    }
    document.getElementById("overlay").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("loginMessage").style.display = "none";
}