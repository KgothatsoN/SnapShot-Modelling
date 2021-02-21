let email = document.getElementById('email');
let form = document.getElementById('form');
let errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

    if (email.value === "") {
        e.preventDefault();
        alert('Email Address is required...');
    }
});