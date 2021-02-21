let email = document.getElementById('email');
let form = document.getElementById('form');
let errorElement = document.getElementById('error')

// Form validation
form.addEventListener('submit', (e) => {
    // Check if email field is empty
    if (email.value === "") {
        e.preventDefault();
        alert('Email Address is required...');
    }
});