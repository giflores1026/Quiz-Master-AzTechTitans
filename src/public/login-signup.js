const signupButton = document.getElementById('signupButton');
const signupButtonSide = document.getElementById('signupButton-side');
  const registerForm = document.getElementById('registerForm');
  const loginFormMain = document.getElementById('loginForm');

  signupButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag

    // Toggle the visibility of the register form
    registerForm.classList.remove("hidden");
    loginFormMain.classList.add("hidden");
  });

  signupButtonSide.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag

    // Toggle the visibility of the register form
    registerForm.classList.remove("hidden");
    loginFormMain.classList.add("hidden");
  });

// Function to toggle the visibility of the forms
function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");
    if (registerForm.classList.contains("hidden")) {
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    } else {
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    }
  }
  

  // Add event listener to the button to toggle the form
  document.getElementById("registerButton").addEventListener("click", toggleForm);
  document.getElementById("loginButton").addEventListener("click", toggleForm);
  
  // login-signup.js
  
  document.addEventListener("DOMContentLoaded", function () {
    // Add event listener for register form submission
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
  
        // Validate the register form fields
        var userType = document.getElementById("user-type").value;
        var firstName = document.getElementsByName("first-name")[0].value;
        var lastName = document.getElementsByName("last-name")[0].value;
        var registerEmail = document.getElementsByName("register-email")[0].value;
        var username = document.getElementsByName("register-username")[0].value;
        var password = document.getElementsByName("register-password")[0].value;
        var confirmPassword = document.getElementsByName("register-cpassword")[0].value;
  
        // Elements for error messages
        var fnameChecker = document.getElementById("Firstname");
        var LnameChecker = document.getElementById("Lastname");
        var PasswordLengthChecker = document.getElementById("Passwordchecker");
        var ConfirmPasswordchecker = document.getElementById("ConfirmPasswordchecker");
  
        // Validate names with letters only
        var nameRegex = /^[a-zA-Z]+$/;
  
        // Reset error messages
        fnameChecker.classList.add("hidden");
        LnameChecker.classList.add("hidden");
        PasswordLengthChecker.classList.add("hidden");
        ConfirmPasswordchecker.classList.add("hidden");
  
        // Check for empty fields
        if (!userType || !firstName || !lastName || !registerEmail || !username || !password || !confirmPassword) {
            alert("Please fill in all the fields for registration.");
            return;
        }
  
        var hasErrors = false;
  
        // Validate first name
        if (!nameRegex.test(firstName)) {
            fnameChecker.classList.remove("hidden");
            hasErrors = true;
        } else {
            fnameChecker.classList.add("hidden");
        }
  
        // Validate last name
        if (!nameRegex.test(lastName)) {
            LnameChecker.classList.remove("hidden");
            hasErrors = true;
        } else {
            LnameChecker.classList.add("hidden");
        }
  
        // Validate password length and characters
        var passwordRegex = /^[a-zA-Z*_]+$/;
        if (password.length < 8 || !passwordRegex.test(password)) {
            PasswordLengthChecker.classList.remove("hidden");
            hasErrors = true;
        } else {
            PasswordLengthChecker.classList.add("hidden");
        }
  
        // Validate password match
        if (password !== confirmPassword) {
            ConfirmPasswordchecker.classList.remove("hidden");
            hasErrors = true;
        } else {
            ConfirmPasswordchecker.classList.add("hidden");
        }
  
        // If there are errors, prevent further processing
        if (hasErrors) {
            return;
        }
  
        // Perform your registration logic here
        // Example: You can send the form data to a server using AJAX
  
        alert("Registration successful!"); // Replace with your actual registration logic
  
        // Switch back to login form after successful registration
        toggleForm();
    });
  
    // Add event listener for login form submission (static email login)
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
  
        // Validate the login form fields
        var loginEmail = document.getElementsByName("login-email")[0].value;
        var loginPassword = document.getElementsByName("login-password")[0].value;
  
        // For static email login, check if the provided email matches the static email
        if (loginEmail != "ian@gmail.com" || loginPassword != "Gabriel*") {
            alert("Invalid email or password.");
            return;
        }
  
        // Perform your login logic here
        // Example: You can send the login credentials to a server using AJAX
  
        alert("Login successful!"); // Replace with your actual login logic
    });
  });