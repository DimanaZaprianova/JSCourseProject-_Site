

// check the validity of the mail address while typing it

const emailInput = document.querySelector('#email');

emailInput.addEventListener('change', function (event) {
  let emailValue = event.currentTarget.value;
  
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(emailValue)) {
    emailInput.style.borderStyle = 'solid';
    emailInput.style.borderColor = 'green';
    
  } else {
    emailInput.style.borderStyle = 'solid';
    emailInput.style.borderColor = 'red';
    alert('Invalid email address');
  };
});
  
 
  
  // check whether the password has at least 8 and not more than 15 characters, one uppercase letter, one number and one special character
  
const pswInput = document.querySelector('#psw');

pswInput.addEventListener('change', function (event) {
  let pswValue = event.currentTarget.value;
  let uppercase = /[A-Z]/;
  let lowercase = /[a-z]/;
  let number = /[0-9]/;
  let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if ((8<=pswValue.length<=15) && pswValue.match(uppercase) && pswValue.match(lowercase) && pswValue.match(number) && pswValue.match(special)) {
      
      pswInput.style.borderStyle = 'solid';
      pswInput.style.borderColor = 'green';
      // alert('Valid password');
    } else {
      pswInput.style.borderStyle = 'solid';
      pswInput.style.borderColor = 'red';
      alert('Invalid password - the password shall contain at least 8 and not more than 15 characters, one uppercase letter, one number and one special character');
    };
  });
  
  // check whether the password is repeated correctly
  
const pswRepInput = document.querySelector('#psw-repeat');

pswRepInput.addEventListener('change', function (event) {
  let pswValue = pswInput.value;
  let pswRepValue = event.currentTarget.value;
  if (pswValue == pswRepValue) {
    pswRepInput.style.borderStyle = 'solid';
    pswRepInput.style.borderColor = 'green';
  } else {
    pswRepInput.style.borderStyle = 'solid';
    pswRepInput.style.borderColor = 'red';
      alert('Password repeated incorrectly');
    };
  });
  
  
        const regButton = document.querySelector('#regbtn');
        regButton.addEventListener('click', function(event) {
          if ((pswRepInput.style.borderColor == 'green') && (pswInput.style.borderColor == 'green') && (emailInput.style.borderColor == 'green')) {
                 event.currentTarget.innerHTML = 'Registration successful';
          };
        });
      
      
  
      
      
      
      
      
      
  