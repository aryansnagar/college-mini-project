const carousel = document.getElementById('image-carousel');
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % 4;
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(nextImage, 4000);

// adding link to the division

function navigateToPage() {
    // Change the window location to the desired page URL
    window.location.href = 'product.html'; // Replace with your desired URL
}

// email 

    // Get the input field element by its ID
    var emailInput = document.getElementById("emailInput");

    // Add an event listener for the 'keyup' event on the input field
    emailInput.addEventListener("keyup", function(event) {
        // Check if the 'Enter' key (key code 13) is pressed
        if (event.key === "Enter") {
            // Get the entered email from the input field
            var enteredEmail = emailInput.value;

            // Perform any necessary validation here before sending the email

            // Simulate sending an email (replace this with your actual email sending logic)
            // In a real scenario, you might use AJAX to send data to a server
            // For simplicity, we'll just log the email to the console in this example
            console.log("Email sent: " + enteredEmail);

            // Show a popup message
            alert("Email sent!");

            // Clear the input field
            emailInput.value = "";
        }
    });