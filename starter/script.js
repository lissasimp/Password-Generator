


// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#','$', '^','?', ':', ',', ')', '(', '}', 
'{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
's','t','u','v','w','x','y','z'];

// // Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
'S','T','U','V','W','X','Y','Z'];

// Function to prompt user for password options
  let userChoice;
do {
     userChoice = prompt("How many characters would you like your password to contain (10-64)?");
} while (userChoice < 10 || userChoice > 64) {
  // alert("Your password must contain between 10 and 64 characters. Please try again.")
}

// let password = "" //need to store random characters to this striing and then ensure they are the same length as the userchoice
//   //How many characters would you like your password to contain? 10-64
//       //if less than 10, alert user "You password must contain 10 or more characters"
//       //if more than 64, alert user "Your password cannot contain more than 64 characters"

// Would you like your password to contain lowercase letters?
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
var userChoice1 = confirm ("Would you like your password to contain lowercase letters?");
if (userChoice1 % 2 === 0) { //this generates a letter on OK and Cancel
}
else (userChoice1 === null)
console.log(getRandom(lowerCasedCharacters))

  //if ok, generate random lowercase letters from lowerCasedCharacters // if canceldo not generate lowercase letters

// Would you like your password to contain uppercase letters?
var userChoice2 = confirm ("Would you like your password to contain uppercase letters?");
if (userChoice2 % 2 === 0) {
}
console.log(getRandom(upperCasedCharacters))

  //if ok, generate random uppercase letters from upperCasedCharacters // if cancel do not generate uppercase letters

// Would you like your password to contain numbers?
var userChoice3 = confirm ("Would you like your password to contain numbers?");
if (userChoice3 % 2 === 0) {
}
console.log(getRandom(numericCharacters))


//   //if ok, generate random numbers from numericCharacters // if cancel do not generate numbers


// // Would you like your password to contain special characters ($@%&*, etc)?
var userChoice4 = confirm ("Would you like your password to contain special characters?");
if (userChoice4 % 2 === 0) {
}
console.log(getRandom(specialCharacters))

//   //if ok, generate random special characters from specialCharacters // if cancel do not generate special characters

// // }

// // Function for getting a random element from an array




// // console.log(getRandom(numericCharacters))
// // console.log(getRandom(specialCharacters))
// // console.log(getRandom(upperCasedCharacters))
// // console.log(getRandom(lowerCasedCharacters))

  

// // }

// // // Function to generate password with user input //this is where the password will generate
// // function generatePassword() {

// // }

// // // Get references to the #generate element
// // var generateBtn = document.querySelector('#generate');

// // // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector('#password');

// //   passwordText.value = password;
// // }

// // // Add event listener to generate button
// // generateBtn.addEventListener('click', writePassword);

// // // * Generate a password when the button is clicked
// // //   * Present a series of prompts for password criteria
// // //     * 
// // //   * Code should validate for each input and at least one character type should be selected
// // //   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page