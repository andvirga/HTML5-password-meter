var strength = {
    0: "Oh no! It's AWFUL!",
    1: "You better change it!",
    2: "You can do it better...",
    3: "Ok! This is fine, but could be improved",
    4: "Awesome! You've nailed it!"
  }

var username = document.getElementById('username');
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');
var warning = document.getElementById('password-warning');
var suggestions = document.getElementById('password-suggestions');
var timetocrack = document.getElementById('time-to-crack');

password.addEventListener('input', function() {
  var val = password.value;
  /* console.log(firstname.value, lastname.value, username.value, email.value); */
  var result = zxcvbn(val, user_inputs=[firstname.value, lastname.value, username.value, email.value]);

  // Update the text indicator
  if (val !== "") {
    // Update the password strength meter
    meter.value = result.score + 1;
    text.innerHTML = "<b>Strength:</b> " + strength[result.score]; 
    warning.innerHTML = "<b>Warning:</b> " + result.feedback.warning;
    suggestions.innerHTML = "<b>Suggestions:</b> " + result.feedback.suggestions;
    timetocrack.innerHTML = "<b>Time to crack:</b> " + result.crack_times_display.online_no_throttling_10_per_second;
  } else {
    meter.value = 0;
    text.innerHTML = "";
    warning.innerHTML = "";
    suggestions.innerHTML = "";
    timetocrack.innerHTML = "";
  }
});

$('#passwordButton').click(function(e){
  e.preventDefault();
  
  if ($('#password').get(0).type == "password"){
      $('#password').get(0).type="text"
  }
  else {
      $('#password').get(0).type="password";
  }
  
  $(this).text(function(index, text){
      return text == "Show" ? "Hide" : "Show";
  }).attr('aria-label', function(index, attr){
      return attr == 'Show Password' ? 'Hide Password' : 'Show Password';
  });
})


/*$('#showpassword').click(function(e) {
    if ($('#password').get(0).type == "password") {
        $('#password').get(0).type="text"
    }
    else {
        $('#password').get(0).type="password";
    }
});*/

