//              Notesssssssssssssssssssss
//
//

// Select elements
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

// JavaScript to toggle the navigation menu on mobile
menuToggle.addEventListener('click', function() {
    navList.classList.toggle('hidden'); // Toggle the visibility of the menu
});




// for contact page

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("feedback");
    const submitButton = document.getElementById("submit-btn");

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the traditional form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            // Show success message
            feedback.classList.remove("hidden");
            form.reset();
        } else {
            // Highlight empty fields
            if (!name) document.getElementById("name").style.border = "2px solid red";
            if (!email) document.getElementById("email").style.border = "2px solid red";
            if (!message) document.getElementById("message").style.border = "2px solid red";

            alert("Please fill in all fields.");
        }
    });

    // Reset field border when user starts typing
    form.addEventListener("input", (e) => {
        e.target.style.border = "1px solid #ccc";
    });
});




