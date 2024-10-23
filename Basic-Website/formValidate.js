// Implement Basic Validation for the form fields.

document.getElementById('basicForm').addEventListener('submit', function (e){
    
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email= document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const errorElement = document.getElementById('error');

    errorElement.textContent = '';

    if(firstName === ''){
        errorElement.textContent = 'First Name is required';
        e.preventDefault();
        return;
    }

    if(lastName === ''){
        errorElement.textContent = 'Last Name is required';
        e.preventDefault();
        return;
    }

    if(email === ''){
        errorElement.textContent = 'Please enter your email';
        e.preventDefault();
        return;
    }

    if(message === ''){
        errorElement.textContent = 'Please enter your message';
        e.preventDefault();
        return;
    }

    if(phone.length !== 10){
        errorElement.textContent = 'Please enter a valid Phone No';
        e.preventDefault();
        return;
    }
})