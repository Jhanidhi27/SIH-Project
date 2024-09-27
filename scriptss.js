function validateLogin(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (username === "admin" && password === "password123") {
      // Redirect to dashboard if login is successful
      window.location.href = "index.html";
    } else {
      // Show error message
      document.getElementById('login-error').textContent = "Invalid username or password!";
    }
  }
  