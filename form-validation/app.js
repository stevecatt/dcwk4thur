
let btnRegister = document.getElementById("btnRegister")
let registerForm = document.getElementById("registerForm")
let ssnTextBox = document.getElementById("ssnTextBox")

btnRegister.addEventListener('click',function(event){

  console.log(event)

  let isSSNTextBoxValid = ssnTextBox.checkValidity()
  console.log("SSN TextBox")
  console.log(isSSNTextBoxValid)

  let isFormValid = registerForm.checkValidity()
  console.log(isFormValid)

  // prevent the form from being submitted
  event.preventDefault()
})
