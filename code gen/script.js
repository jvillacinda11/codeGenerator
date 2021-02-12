// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
document.getElementById('generate').addEventListener('click', () => {

  let length = prompt('Input desired amount of characters in your password. (From 8-128)')

  let uppercase = confirm('Confirm that you would like UPPERCASE characters in your password.\nOk = yes. Cancel = no.')

  let lowercase = confirm('Confirm that you would like LOWERCASE characters in your password. \n Ok = yes. Cancel = no.')

  let numeric = confirm('Confirm that you would like NUMERIC characters in your password. \n Ok = yes. Cancel = no.')

  let special = confirm('Confirm that you would like SPECIAL CHARACTERS in your password. \nOk = yes.Cancel = no.')

  let charSet = ''

  let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  let lowercaseChar = "abcdefghijklmnopqrstuvxxyz"

  let numericChar = "0123456789"

  let specialChar = `!"#$%&'()*+,-.:;<=>?@[]^_{|}~`

  let generatedPassword = ""


  if (uppercase) {
    charSet += uppercaseChar
  }
  if (lowercase) {
    charSet += lowercaseChar
  }
  if (numeric) {
    charSet += numericChar
  }
  if (special) {
    charSet += specialChar
  }
  for (let i = 0; i < length; i++) {
    generatedPassword += charSet[Math.floor(Math.random() * charSet.length)]
  }

  document.getElementById('password').textContent = generatedPassword





})