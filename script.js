function validateForm() {
    var form = document.getElementById('registrationForm');

    
    var nameField = form.elements['name'];
    var nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(nameField.value)) {
        alert('Please enter a valid name (letters and spaces only)');
        nameField.focus();
        return false;
    }

    
    var emailField = form.elements['email'];
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        alert('Please enter a valid email address');
        emailField.focus();
        return false;
    }

    

   
    var eventDateField = form.elements['eventDate'];
    var eventDateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!eventDateRegex.test(eventDateField.value)) {
        alert('Please enter a valid event date in the format MM/DD/YYYY');
        eventDateField.focus();
        return false;
    }

    
    var numTicketsField = form.elements['numTickets'];
    var numTickets = parseInt(numTicketsField.value, 10);
    if (numTickets < 1 || numTickets > 10) {
        alert('Please enter a number of tickets between 1 and 10');
        numTicketsField.focus();
        return false;
    }
    
    return true;
}