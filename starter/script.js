function generatePassword() {
  // Array of special characters to be included in password
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Array of numeric characters to be included in password
  var numericCharacters = "0123456789";

  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";

  // // Array of uppercase characters to be included in password
  var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var chosenChars = [];

  //Prompt user for password length
  var userChoice = prompt(
    "How many characters would you like your password to contain (10-64)?"
  );
  if (userChoice < 10 || userChoice > 64) {
    alert(
      "Your password must contain between 10 and 64 characters. Please try again."
    );
    return "";
  }
  console.log(userChoice);

  //Prompt user for password options
  var lower = confirm(
    "Click OK to confirm if you would like to include lowercase letters."
  );
  var upper = confirm(
    "Click OK to confirm if you would like to include uppercase letters."
  );
  var numChar = confirm(
    "Click OK to confirm if you would like to include numeric characters."
  );
  var specChar = confirm(
    "Click OK to confirm if you would like to include special characters."
  );

  //Prompts user to ensure they choose at least one character type
  if (!lower && !upper && !numChar && !specChar) {
    alert("Please choose at least one character type.");
    return "";
  }

  //When user clicks ok, their choice will be saved in chosenChars variable .split splits a string into an array of substrings .concat merges 2 or more arrays
  if (lower) {
    chosenChars = chosenChars.concat(lowerCasedCharacters.split(""));
  }
  if (upper) {
    chosenChars = chosenChars.concat(upperCasedCharacters.split(""));
  }
  if (numChar) {
    chosenChars = chosenChars.concat(numericCharacters.split(""));
  }
  if (specChar) {
    chosenChars = chosenChars.concat(specialCharacters.split(""));
  }

  var finalPassword = "";
  for (var i = 0; i < userChoice; i++) {
    finalPassword +=
      chosenChars[Math.floor(Math.random() * chosenChars.length)];
  }
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
