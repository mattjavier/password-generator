// Assignment Code
let generateBtn = document.querySelector("#generate");

// character arrays
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
              'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
              'u', 'v', 'w', 'x', 'y', 'z']
const special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', 
                '*', '+', ',', '-', '.', '/', ':', ';', '<', '=',
                '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{',
                '|', '}', '~']

function generatePassword() {
  // use prompt() and confirm() to interact with user

  // prompt user for character length
  let charLength = parseInt(prompt('How long do you want the password to be? ( more than 8 or less than 128 characters)'))

  // check if charLength is falls between 8 and 128 characters
  if (charLength < 8 || charLength > 128) {
    while (charLength < 8 || charLength > 128) {
      charLength = parseInt(prompt('Please input a number greater than 8 or less than 128'))
    }
  } else {
    
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword()
  let passwordText = document.querySelector("#password")

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
