function login() {
    var formData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    // Simulate form submission and authentication
    if (formData.email === "example@example.com" && formData.password === "password") {
        // Simulate successful login
        alert("Login successful!");
        // Redirect user to main page or dashboard
        window.location.href = "/main";
    } else {
        // Simulate failed login
        alert("Invalid email or password. Please try again.");
    }
}

// Prevent default form submission behavior
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Call login function to handle form submission
    login();
});
