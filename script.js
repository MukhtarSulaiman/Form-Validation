const form = document.getElementById('form');
const username = document.getElementById('username');
const  email = document.getElementById('email');
const  password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('click', (e) => {
  e.preventDefault();
  
  checkInputs();
  sitTimeout(() => {
    getInputFromTextBox();
  }, 1000);
});

function checkInputs() {
  //get the values from the inputs
  var usernameValue = username.value.trim();
  var  emailValue = email.value.trim();
  var  passwordValue = password.value.trim();
  var passwordValue2 = password2.value.trim();
  
  if(usernameValue === '') {
    // show error
    // add error class
    setErrorFor(username, 'Username can not be blank!')
  } else {
    //add success class
    setSuccessFor(username);
  }
  
    if(emailValue === '') {
      setErrorFor(email, 'Email field can not be blank!')
    } else if(!isEmail(emailValue)) {
      setErrorFor(email, 'Email is not valid')
    } else {
      setSuccessFor(email);
    }
  
  if(passwordValue === '') {
    setErrorFor(password, 'Passord field can not be blank!')
  } else {
    setSuccessFor(password);
  }
  
  if(passwordValue2 === '') {
    setErrorFor(password2, 'Passord2 field can not be blank!')
  } else if (passwordValue !== passwordValue2) {
      setErrorFor(password2, 'Passowrds do not match!')
    } else {
    setSuccessFor(password2);
  }
  
  
   
} 

function setErrorFor(input, message) {
  const formControl = input.parentElement; //form-control
  const small = formControl.querySelector('small');
  
  // add error message inside small
  small.innerText = message;
  
  // add error message
  formControl.className = 'form-control error';
};

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
};

function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function getInputFromTextBox() {
  var input = document.getElementById("form").value;
  alert(input);
} 
console.log()