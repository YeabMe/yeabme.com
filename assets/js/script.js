//  Loading
$(document).ready(function () {
  // Initially hide content sections
  $(".home, .about, .skill, .portfolio, .contact, .Nav-section ,.footer").addClass(
    "hidden"
  );

  // Show loading spinner
  $(".spin-wrapper")
    .fadeIn("slow")
    .delay(3000)
    .fadeOut("slow", function () {
      // Once spinner is hidden, show content sections
      $(".home, .about, .skil, .portfolio, .contact, .Nav-section, .footer ")
        .removeClass("hidden")
        .fadeIn("slow");
    });
});

// Sticky
const stickyDiv = document.getElementById("sticky");

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Function to add the Tailwind CSS class when scroll position is down
function handleScroll() {
  if (window.scrollY > 100) {
    // Adjust the scroll as needed
    stickyDiv.classList.add("sticky", "top-0", "shadow-md", "bg-base-100");
  } else {
    stickyDiv.classList.remove("sticky", "top-0", "shadow-md", "bg-base-100");
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Function to reset styles when scroll bar returns to top
function resetStyles() {
  if (window.scrollY === 0) {
    stickyDiv.classList.remove("sticky", "top-0", "shadow-md", "bg-base-100");
  }
}

// Add scroll event listener to reset styles
window.addEventListener("scroll", resetStyles);


// Download Resume Logic
document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById('downloadButton');
  const notification = document.getElementById('notification');

  downloadButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    notification.classList.remove('hidden'); // Show the notification

    // Hide the notification after 3 seconds
    setTimeout(function() {
      notification.classList.add('hidden');
    }, 3000);
  });
});
