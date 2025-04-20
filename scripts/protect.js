document.addEventListener("DOMContentLoaded", () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = "auth.html"; // Redirect to login page if not logged in
        }
    });
});
