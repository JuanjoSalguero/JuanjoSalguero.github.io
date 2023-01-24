document.querySelector('.contac-form').addEventListener('submit', function(event){
    event.preventDefault(); // avoid the default behavior of the form
    // Sending the email
    this.submit(); // send the form
    //Fields cleaning
    var inputs = document.querySelectorAll('.contac-form .clean, .contac-form textarea');
    inputs.forEach(function(input){
      input.value = "";
    });
  });