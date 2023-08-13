$(document).ready(function() {
  // Form submission handler
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();
    var operation = $('#operation').val();

    // Create AJAX request
    $.ajax({
      url: '/process',
      type: 'POST',
      data: {
        num1: num1,
        num2: num2,
        operation: operation
      },
      success: function(result) {
        // Update result field
        $('#result').text('Result: ' + result);

        // Change page color based on result
        if (result >= 0) {
          $('body').css('background-color', '#b2e8b2');
        } else {
          $('body').css('background-color', '#ffb2b2');
        }
      },
      error: function() {
        alert('An error occurred. Please try again.');
      }
    });
  });
});

