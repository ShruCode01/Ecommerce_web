/*
Project: LunaCart - Minimal Fashion Store
File: script.js
Description: Navigation toggling, form validation, and simple interactions.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate hamburger icon (optional simple text change or rotation could go here)
        });
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Get fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Reset errors
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            [name, email, message].forEach(el => el.style.borderColor = '#ddd');

            // Validate Name
            if (name.value.trim() === '') {
                showError(name, 'Please enter your name');
                isValid = false;
            }

            // Validate Email
            if (email.value.trim() === '' || !isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            }

            // Validate Message
            if (message.value.trim() === '') {
                showError(message, 'Please enter a message');
                isValid = false;
            }

            if (isValid) {
                // Determine visuals for success (Simulated)
                alert(`Thank you, ${name.value}! We have received your message.`);
                contactForm.reset();
            }
        });
    }

    function showError(input, msg) {
        const parent = input.parentElement;
        const errorDiv = parent.querySelector('.error-message');
        input.style.borderColor = '#e74c3c';
        if (errorDiv) {
            errorDiv.textContent = msg;
            errorDiv.style.display = 'block';
        }
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // --- Product "Add to Cart" Interaction (Gallery) ---
    const addToCartBtns = document.querySelectorAll('.add-to-cart-overlay');

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.product-card');
            const productName = card.querySelector('h3').textContent;
            
            // Simple visual feedback
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.backgroundColor = '#8da399'; // Sage green
            
            alert(`${productName} has been added to your cart!`);

            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = ''; // Reset
            }, 2000);
        });
    });
});
