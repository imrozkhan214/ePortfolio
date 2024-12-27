document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const roleElement = document.getElementById("role");
  
    // Add typing animation for the name
    nameElement.classList.add("typing");
  
    // You can add a delay before the second text appears
    setTimeout(() => {
      roleElement.style.display = "inline";  // Make role text visible after typing
    }, 3000); // Delay for 3 seconds (after the typing effect completes)
  });
  