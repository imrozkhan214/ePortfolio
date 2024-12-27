const text = "Imroz Khan";
let index = 0;
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
  // Clear the text content once typing finishes and before starting the next loop
  typewriterElement.textContent = text.slice(0, index);
  if (index < text.length) {
    index++;
    setTimeout(typeWriter, 100); // Continue typing one character at a time
  } else {
    // Wait for 3 seconds, then reset
    setTimeout(resetTypewriter, 3000); // Delay before starting the next loop
  }
}

function resetTypewriter() {
  // Reset the text and index after delay
  index = 0;
  typeWriter(); // Start the typing effect again
}

// Start the typing effect when the page loads
window.onload = typeWriter;


  // Get all the nav links
  const navLinks = document.querySelectorAll('.nav__menu a');

  // Add a click event listener to each nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();  // Prevent default anchor link behavior

      // Get the target class from the href (this will get the class selector)
      const targetClass = link.getAttribute('href').substring(1); // Remove the '.' from the class name

      // Find the target section by class
      const targetSection = document.querySelector(`.${targetClass}`);

      // Scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth',  // Smooth scroll
        block: 'start',      // Align to the top of the viewport
      });
    });
  });
  
  // This function toggles the display of the additional text and the link text.
function toggleReadMore(link) {
  const moreText = link.previousElementSibling; // The <p> with class="more-text"
  const isExpanded = moreText.style.display === 'block';

  // Toggle visibility of the extra text
  moreText.style.display = isExpanded ? 'none' : 'block';

  // Change the link text based on the visibility state
  link.textContent = isExpanded ? 'Read more...' : 'Read less';
}
