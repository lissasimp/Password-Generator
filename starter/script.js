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
var specialCharacters = [" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

// Array of numeric characters to be included in password
var numericCharacters = ["0123456789"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["abcdefghijklmnopqrstuvwxyz"];

// // Array of uppercase characters to be included in password
var upperCasedCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var chosenChars = "";

//Function that will eventually return the generated password
function generatePassword() {
var result = "";

//Prompt user for password length
var userChoice = prompt("How many characters would you like your password to contain (10-64)?");
if (userChoice < 10 || userChoice > 64) {
  alert("Your password must contain between 10 and 64 characters. Please try again.")
  return generatePassword()
}

//Prompt user for password options
var lower = confirm("Click OK to confirm if you would like to include lowercase letters.");
var upper = confirm("Click OK to confirm if you would like to include uppercase letters.");   
var numChar = confirm("Click OK to confirm if you would like to include numeric characters.");    
var specChar = confirm("Click OK to confirm if you would like to include special characters.");

//Prompts user to ensure they choose at least one character type
if(!lower && !upper && !numChar && !specChar) {
  alert("Please choose at least one character type.")
  return generatePassword()
}

//When user clicks ok, their choice will be saved in chosenChars variable
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

//Takes result from chosenChars and selects at random based on user's choice of length
for (var i = 0; i < userChoice; i++) {
  result +=chosenChars.charAt(Math.floor(Math.random() * chosenChars.length));
}
return result;
}
