document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Reset all error messages
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("confirmPasswordError").style.display = "none";

    // Fetch form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validate form fields
    var valid = true;

    // Username validation
    if (username.length < 3) {
        document.getElementById("usernameError").innerText = "Username must be at least 3 characters long";
        document.getElementById("usernameError").style.display = "block";
        valid = false;
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
    }

    // If the form is valid, redirect to the congrats page with username in URL
    if (valid) {
        // Pass the username via URL parameters
        window.location.href = `congratulation.html?username=${encodeURIComponent(username)}`;
    }
});
