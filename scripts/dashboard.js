document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout");

    if (!logoutButton) {
        console.error("Logout button not found!");
        return;
    } else {
        console.log("Logout button found!");
    }

    logoutButton.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Logout button clicked!"); // Debugging log
        localStorage.removeItem("loggedIn"); // Remove login status
        localStorage.removeItem("user"); // Remove user details (optional)
        alert("Logged out successfully!");
        window.location.href = "login.html"; // Redirect to login page
    });
});
