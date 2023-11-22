
var errorMessage = "";
var matchMessage = "";

// Add the error message span initially
$('#toggle-password').after(`<span class="error-message">${errorMessage}</span>`);
$('#password').on('input', function (evt) {
    var value = evt.target.value;
    var hasMinLength = value.length > 7;  // Check if character count is greater than 7
    var hasEnterNumber = value.length <= 1; //Add one number to input
    var hasTwoNumbers = (value.match(/\d/g) || []).length >= 2; // Check for at least two numbers
    var hasOneUpperCase = (value.match(/[A-Z]/g) || []).length >= 1; // Check for at least one uppercase letters
    var hasTwoLowerCase = (value.match(/[a-z]/g) || []).length >= 2; // Check for at least two lowercase letters
    var hasTwoSpecialChar = (value.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length >= 2; // Check for at least two special characters


    if (value.length === 0) {
        evt.target.className = '';
        errorMessage = "";
        updateErrorMessage();
        return;
    }

    if (hasEnterNumber) {
        evt.target.className = 'too-weak';
        errorMessage = "Too Weak";
    }
    else if (hasOneUpperCase && !hasTwoNumbers && !hasTwoLowerCase && !hasTwoSpecialChar && !hasMinLength) {
        evt.target.className = 'too-weak';
        errorMessage = "Too Weak";
    } else if (!hasOneUpperCase && hasTwoNumbers && !hasTwoLowerCase && !hasTwoSpecialChar && !hasMinLength) {
        evt.target.className = 'too-weak';
        errorMessage = "Too Weak";
    } else if (!hasOneUpperCase && !hasTwoNumbers && hasTwoLowerCase && !hasTwoSpecialChar && !hasMinLength) {
        evt.target.className = 'too-weak';
        errorMessage = "Too Weak";
    } else if (!hasOneUpperCase && !hasTwoNumbers && !hasTwoLowerCase && hasTwoSpecialChar && !hasMinLength) {
        evt.target.className = 'too-weak';
        errorMessage = "Too Weak"; //end too-weak
    }
    else if (hasOneUpperCase && hasTwoNumbers && hasTwoLowerCase && !hasTwoSpecialChar && !hasMinLength) {
        evt.target.className = 'good';
        errorMessage = "Good";
    } else if (hasOneUpperCase && hasTwoNumbers && !hasTwoLowerCase && hasTwoSpecialChar && !hasMinLength) {
        evt.target.className = 'good';
        errorMessage = "Good";
    } else if (hasOneUpperCase && !hasTwoNumbers && hasTwoLowerCase && hasTwoSpecialChar && !hasMinLength) {
        evt.target.className = 'good';
        errorMessage = "Good";
    } else if (!hasOneUpperCase && hasTwoNumbers && hasTwoLowerCase && hasTwoSpecialChar && !hasMinLength) {
        evt.target.className = 'good';
        errorMessage = "Good"; // end good
    } else if (hasOneUpperCase && hasTwoNumbers && hasTwoLowerCase && hasTwoSpecialChar && hasMinLength) {
        evt.target.className = 'strong';
        errorMessage = "Strong"; // end Strong
    } else {
        evt.target.className = 'weak';
        errorMessage = "Weak";
    }

    // Update the error message span
    updateErrorMessage();
});

$('#toggle-repassword').after(`<span class="match-message">${matchMessage}</span>`);
$('#re-password').on('input', function (evt) {
    var value = evt.target.value;
    var password = $('#password').val();

    if (value.length > 0 && password.length > 0) {
        if (value === password) {
            evt.target.className = 'valid';
            matchMessage = "Passwords match";
        } else {
            evt.target.className = 'invalid';
            matchMessage = "Passwords do not match";
        }
    } else {
        // Reset validation if either field is empty
        evt.target.className = '';
        matchMessage = "";
    }

    updateMatchMessage();
});


function updateErrorMessage() {
    $('.error-message').text(errorMessage);
}

function updateMatchMessage() {
    $('.match-message').text(matchMessage);
}



function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    var icon = input.nextElementSibling.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa', 'fa-eye-slash');
        icon.classList.add('fa', 'fa-eye');
    } else {
        input.type = 'password';
        icon.classList.remove('fa', 'fa-eye');
        icon.classList.add('fa', 'fa-eye-slash');
    }
}