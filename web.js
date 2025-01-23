document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('confirmation-message').innerHTML = `Thank you for registering, ${name}! We will send event details to ${email}.`;
        document.getElementById('registration-form').reset();
    } else {
        document.getElementById('confirmation-message').innerHTML = 'Please fill in all fields.';
    }
});
