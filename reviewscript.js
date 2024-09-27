// Function to set the rating when the user clicks a star
function setRating(ratingValue) {
    const stars = document.querySelectorAll('.star');
    document.getElementById('rating').value = ratingValue;

    // Update star appearance
    stars.forEach((star, index) => {
        if (index < ratingValue) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Function to handle form submission
function submitFeedback(event) {
    event.preventDefault(); // Prevent page reload

    const complaint = document.getElementById('complaint').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    // Perform basic validation
    if (!complaint || !review || rating === "0") {
        alert("Please fill all fields and select a rating.");
        return;
    }

    // Show a message that feedback was submitted successfully
    document.getElementById('feedback-message').textContent = "Thank you for your feedback!";
    document.getElementById('feedback-message').style.display = 'block';

    // Optionally, here you can send the data to the server using fetch or AJAX
}
