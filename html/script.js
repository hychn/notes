function toggle() {
  const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headers.forEach(header => {
    //initially hide
    content = header.nextElementSibling;
    if (content != null) {
      if (content.style.display === 'none') {
        content.style.display = 'block'; // Show the content
      } else {
        content.style.display = 'none'; // Hide the content
      }
    }
  });
}

toggle();

const dates = document.querySelectorAll('.date');
dates.forEach(date => {
  date.addEventListener('click', function() {
    toggle();
  });
});

// Get all header elements
const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
// Add click event listener to each header
headers.forEach(header => {
  header.addEventListener('click', function() {
    // Display an alert message with the text content of the clicked header
    //alert("Clicked on: " + header.tagName + " - " + header.textContent);
    content = header.nextElementSibling;

    if (content.style.display === 'none') {
      content.style.display = 'block'; // Show the content
    } else {
      content.style.display = 'none'; // Hide the content
    }
  });
});

