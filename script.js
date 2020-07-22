// Assignment Code
let generateBtn = document.querySelector("#generate");

// character arrays
const num = []
const alpha = []
const special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', 
                '*', '+', ',', '-', '.', '/', ':', ';', '<', '=',
                '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{',
                '|', '}', '~']

function generatePassword() {
  // use prompt() and confirm() to interact with user
  
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword()
  let passwordText = document.querySelector("#password")

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
