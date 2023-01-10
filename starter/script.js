


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',  
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// // Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
// function getPasswordOptions() {
  // var password = //create a new array and push numbers/characters to the new array, then I need to randomly select a combination of numbers based on the UserChoice length
  
  let passwordLength = userChoice
  var userChoice=prompt ("How many characters would you like your password to contain?");
  if (userChoice > 0 && userChoice < 64) {
    console.log(userChoice)
  } 
  else if (userChoice < 0 || userChoice > 64) {
  alert("Your password must contain between 10 and 64 characters. Please try again.")
    prompt ("How many characters would you like your password to contain?"); //need to have a condition that if the user doesn't select anything then they need to be prompted to choose a password
  } //it needs to loop until user chooses the correct length - at the moment it is not


let password = "" //need to store random characters to this striing and then ensure they are the same length as the userchoice
  //How many characters would you like your password to contain? 10-64
      //if less than 10, alert user "You password must contain 10 or more characters"
      //if more than 64, alert user "Your password cannot contain more than 64 characters"

// Would you like your password to contain lowercase letters?
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
var userChoice1 = confirm ("Would you like your password to contain lowercase letters?");
if (userChoice1 % 2 === 0) { //this isn't working - how can I evaluate user answer to tru to generate random numbers?
 console.log(getRandom(lowerCasedCharacters))
}

// console.log("This is the password", password)

  //if ok, generate random lowercase letters from lowerCasedCharacters // if canceldo not generate lowercase letters

// Would you like your password to contain uppercase letters?
var userChoice2 = confirm ("Would you like your password to contain uppercase letters?");
console.log(userChoice2)

  //if ok, generate random uppercase letters from upperCasedCharacters // if cancel do not generate uppercase letters

// Would you like your password to contain numbers?
var userChoice3 = confirm ("Would you like your password to contain numbers?");
console.log(userChoice3)

  //if ok, generate random numbers from numericCharacters // if cancel do not generate numbers


// Would you like your password to contain special characters ($@%&*, etc)?
var userChoice4 = confirm ("Would you like your password to contain special characters?");
console.log(userChoice4)

  //if ok, generate random special characters from specialCharacters // if cancel do not generate special characters

// }

// Function for getting a random element from an array




// console.log(getRandom(numericCharacters))
// console.log(getRandom(specialCharacters))
// console.log(getRandom(upperCasedCharacters))
// console.log(getRandom(lowerCasedCharacters))

  

// }

// // Function to generate password with user input //this is where the password will generate
// function generatePassword() {

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);

// // * Generate a password when the button is clicked
// //   * Present a series of prompts for password criteria
// //     * 
// //   * Code should validate for each input and at least one character type should be selected
// //   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page