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

function toUpper(x) {
  let upper = []
  for (let i = 0; i < x.length; i++) {
    upper.push(x[i].toUpperCase())
  }

  return upper
}

function getChoices() {
  let choices = []
  choices.push(confirm('Do you want lowercase letters to be included?'))
  choices.push(confirm('Do you want uppercase letters to be included?'))
  choices.push(confirm('Do you want numerics to be included?'))
  choices.push(confirm('Do you want special characters to be included?'))

  return choices
}

function generatePassword() {
  
  let pw = []

  // prompt user for character length
  let c = prompt('How long do you want the password to be? ( more than 8 or less than 128 characters)')

  // check if c is valid
  if (c === null) {
    while (c === null) {
      c = prompt('How long do you want the password to be? ( more than 8 or less than 128 characters)')
    }
  }

  let charLength = parseInt(c)
  console.log(charLength)

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

  // create character type array
  let charType = []
  
  if (choices[0] === true) {
    charType.push(alpha)
  }

  if (choices[1] === true) {
    charType.push(toUpper(alpha))
  }

  if (choices[2] === true) {
    charType.push(num)
  }

  if (choices[3] === true) {
    charType.push(special)
  }
  
  // run charLength times
  for (let i = 0; i < charLength; i++) {
    let typeNum = Math.floor(Math.random() * charType.length)
    
    // select the character from its respective array (lowercase, uppercase, numeric or special)
    let charSelect 
    switch (typeNum) {
      case 0:
        charSelect = charType[0][Math.floor(Math.random() * charType[0].length)]
        break
      case 1:
        charSelect = charType[1][Math.floor(Math.random() * charType[1].length)]
        break
      case 2:
        charSelect = charType[2][Math.floor(Math.random() * charType[2].length)]
        break
      default:
        charSelect = charType[3][Math.floor(Math.random() * charType[3].length)]
    }
    
    // push character to the end of pw array
    pw.push(charSelect)
  }

  // make pw array to string and return result
  let result = pw.join('')
  return result
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword()
  let passwordText = document.querySelector("#password")

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
