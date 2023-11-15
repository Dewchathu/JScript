
var errorMessage = "";

// Add the error message span initially
$('#toggle-password').after(`<span class="error-message">${errorMessage}</span>`);

$('#password').on('input', function (evt) {
  var value = evt.target.value;

  if (value.length === 0) {
    evt.target.className = '';
    errorMessage = "";
    updateErrorMessage();
    return;
  }

  if (value.length < 8) {
    evt.target.className = 'weak';
    errorMessage = "Weak";
  } else {
    // Check for at least two numbers
    if((value.match(/\d/g) || []).length >= 2){
        // evt.target.className = 'valid';
        // errorMessage = "Good";
        // Check for at least two uppercase letters
        if((value.match(/[A-Z]/g) || []).length >= 2){
            // evt.target.className = 'valid';
            // errorMessage = "Good";
            // Check for at least two lowercase letters
            if((value.match(/[a-z]/g) || []).length >= 2){
                // evt.target.className = 'valid';
                // errorMessage = "Good";
                // Check for at least two special characters
                if((value.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length >= 2){
                    evt.target.className = 'valid';
                errorMessage = "Good";
                }else {
                    evt.target.className = 'weak';
                errorMessage = "Weak";
                }
            }else{
                evt.target.className = 'weak';
                errorMessage = "Weak";
            }
        }else{
            evt.target.className = 'weak';
        errorMessage = "Weak";
        }
    }else{
        evt.target.className = 'weak';
        errorMessage = "Weak";
    }
  }

  // Update the error message span
  updateErrorMessage();
});

function updateErrorMessage() {
  $('.error-message').text(errorMessage);
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