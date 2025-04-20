document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (!name || !email || !password) {
                alert("All fields are required!");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];
            let existingUser = users.find(user => user.email === email);
            
            if (existingUser) {
                alert("Email already registered! Please login.");
                return;
            }

            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("🎉 Signup Successful! Redirecting to login...");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];
            let validUser = users.find(user => user.email === email && user.password === password);

            if (validUser) {
                alert("🎉 Login Successful! Redirecting to dashboard...");
                localStorage.setItem("loggedInUser", JSON.stringify(validUser));
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid credentials! Please try again.");
            }
        });
    }
});

function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("loggedIn", "true");  // Store login status
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password!");
    }
}

function signupUser() {
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username && email && password) {
        let user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Signup Successful! Please login.");
        window.location.href = "login.html";
    } else {
        alert("Please fill all fields.");
    }
}
