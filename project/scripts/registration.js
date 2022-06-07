

// check the validity of the mail address while typing it
document.getElementById("email").onchange = function() {
    let email = document.getElementById("email").value;
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email)) {
      let x = true;
      document.getElementById("email").style.borderStyle = "solid";
      document.getElementById("email").style.borderColor = "green";
      return x;
      // alert('Valid email address');
    } else {
      document.getElementById("email").style.borderStyle = "solid";
      document.getElementById("email").style.borderColor = "red";
      alert('Invalid email address');
    };
  };
  
  
  // check whether the password has at least 8 and not more than 15 characters, one uppercase letter, one number and one special character
  
  
  document.getElementById("psw").onchange= function () {
    let passwordEntry = document.getElementById("psw").value;
    let uppercase = /[A-Z]/;
    let lowercase = /[a-z]/;
    let number = /[0-9]/;
    let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if ((8<=passwordEntry.length<=15) && passwordEntry.match(uppercase) && passwordEntry.match(lowercase) && passwordEntry.match(number) && passwordEntry.match(special)) {
      let y = true;
      document.getElementById("psw").style.borderStyle = "solid";
      document.getElementById("psw").style.borderColor = "green";
      return y;
      // alert('Valid password');
    } else {
      document.getElementById("psw").style.borderStyle = "solid";
      document.getElementById("psw").style.borderColor = "red";
      alert('Invalid password - the password shall contain at least 8 and not more than 15 characters, one uppercase letter, one number and one special character');
    };
  };
  
  // check whether the password is repeated correctly
  document.getElementById("psw-repeat").onchange = function() {
    let psw = document.getElementById("psw").value;
    let psw_repeat = document.getElementById("psw-repeat").value;
    if (psw == psw_repeat) {
      let z = true;
      document.getElementById("psw-repeat").style.borderStyle = "solid";
      document.getElementById("psw-repeat").style.borderColor = "green";
      return z;
      // alert('Password repeated correctly');
    } else {
      document.getElementById("psw-repeat").style.borderStyle = "solid";
      document.getElementById("psw-repeat").style.borderColor = "red";
      alert('Password repeated incorrectly');
    };
  };
  
  
      
      if (document.getElementById("email").value && document.getElementById("psw").value && document.getElementById("psw-repeat").value == true) 
      {
        document.getElementById("regbtn").onclick = function() {
        document.getElementById("regbtn").innerHTML = "Registration successful";
        };
      };
      
      
      
      
      
      
      
  