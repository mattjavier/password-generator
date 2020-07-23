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

function getChoices() {
  let choices = []
  choices.push(confirm('Do you want lowercase letters to be included?'))
  choices.push(confirm('Do you want uppercase letters to be included?'))
  choices.push(confirm('Do you want numerics to be included?'))
  choices.push(confirm('Do you want special characters to be included?'))

  return choices
}

function generatePassword() {
  
  let password = []

  // prompt user for character length
  let charLength = parseInt(prompt('How long do you want the password to be? ( more than 8 or less than 128 characters)'))

  // check if charLength is falls between 8 and 128 characters
  if (charLength < 8 || charLength > 128) {
    while (charLength < 8 || charLength > 128) {
      charLength = parseInt(prompt('Please input a number greater than 8 or less than 128'))
    }
  }

  // array for character types (at least one should be TRUE)
  // choices[lowercase, uppercase, numeric, special]
  let choices = getChoices()

  // check if all choices are 'NO'
  if (choices.indexOf(true) === -1) {

    // if there aren't any 'yes' keep checking
    while (choices.indexOf(true) === -1) {
      choices = getChoices()
    } 
  }

  // run (length) times. char = [rand1][rand2]
  // rand1 = random number index of 0-3 for numeric, special, and all letters
  // rand2 = random number index of 0-array.length for exact character

  for (let i = 0; i < charLength; i++) {
    
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
