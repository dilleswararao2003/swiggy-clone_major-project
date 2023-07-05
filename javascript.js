document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // You can perform further validation here if needed
  
    // Check if the username and password are correct
    if (username === "admin" && password === "password") {
      // Redirect to the dashboard or home page
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
