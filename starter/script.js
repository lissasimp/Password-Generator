// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#','$', '^','?', ':', ',', ')', '(', '}', 
'{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
's','t','u','v','w','x','y','z'];

// // Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var chosenChars = " ";

//Function that will eventually return the generated password
function generatePassword() {
var result = " ";

// Function to prompt user for password options
var userChoice = prompt("How many characters would you like your password to contain (10-64)?");
if (userChoice < 10 || userChoice > 64) {
  alert("Your password must contain between 10 and 64 characters. Please try again.")
  return generatePassword()
}
     
var lower = confirm("Click OK to confirm if you would like to include lowercase characters");
var upper = confirm("Click OK to confirm if you would like to include uppercase characters");   
var numChar = confirm("Click OK to confirm if you would like to include numeric characters");    
var specChar = confirm("Click OK to confirm if you would like to include special characters");

if(!lower && !upper && !numChar && specChar) {
  alert("Please choose at least one character type.")
  return generatePassword()
}
if (lower) {
  chosenChars += lowerCasedCharacters
}
if (upper) {
  chosenChars += upperCasedCharacters
}
if (numChar) {
  chosenChars += numericCharacters
}
if (specChar) {
  chosenChars += specialCharacters
}

for (var i = 0; i < userChoice; i++) {
  result +=chosenChars.charAt(Math.floor(Math.random() * chosenChars.userChoice));
}
return result;
}
// // Would you like your password to contain lowercase letters?
// function getRandom(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// if (confirmLowerCase === true) {
//   console.log(getRandom(lowerCasedCharacters));
// } else {
//   console.log("No character selected")
// }


//   //if ok, generate random lowercase letters from lowerCasedCharacters // if canceldo not generate lowercase letters

// // Would you like your password to contain uppercase letters?

// if (confirmUpperCase === true) {
//   console.log(getRandom(upperCasedCharacters))
// } else {
//   console.log("No character selected")
// }


//   //if ok, generate random uppercase letters from upperCasedCharacters // if cancel do not generate uppercase letters

// // Would you like your password to contain numbers?
// if (confirmNumericCharacter === true) {
//   console.log(getRandom(numericCharacters))
// } else {
//   console.log("No character selected")
// }

// //   //if ok, generate random numbers from numericCharacters // if cancel do not generate numbers

// // // Would you like your password to contain special characters ($@%&*, etc)?
// if (confirmSpecialCharacter === true) {
//   console.log(getRandom(specialCharacters))
// } else {
//   console.log("No character selected")
// }

//   //if ok, generate random special characters from specialCharacters // if cancel do not generate special characters




// // // Function to generate password with user input //this is where the password will generate
// function generatePassword() {
//   var randomPassword = ""
// }
//   for (var i = 0; i < confirmLength; i++) {
//     randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
//     console.log(randomPassword)
//   }
//   return randomPassword;


// // // * Generate a password when the button is clicked
// // //   * Present a series of prompts for password criteria
// // //     * 
// // //   * Code should validate for each input and at least one character type should be selected
// // //   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page