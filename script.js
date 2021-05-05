//arrays to pull individual characters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//variables to pull info
var lengthPass;
var checkNum;
var checkUpper;
var checkLower;
var checkSpecialChar;
var passChar

//function to confirm which characters are used in password
//originally separate, now combined for one

function generatePassword() {
  var lengthPass = prompt("How many characters would you like in your password? Must be between 8 and 128 characters.")

  //If lengthPass isn't in parameters
  while (lengthPass <= 8 || lengthPass >= 128) {
    prompt("Password must have between 8 and 128 characters. Try again.");
    var lengthPass = prompt("How many characters would you like in your password? Must be between 8 and 128 characters.")
  }

  alert("You chose to have " + lengthPass + " characters");

  //confirm what is included in password
  var checkUpper = confirm("Click OK to confirm if you would like to include uppercase letters");
  var checkLower = confirm("Click OK to confirm if you would like to include lowercase letters");
  var checkNum = confirm("Click OK to confirm if you would like to include numbers");
  var checkSpecialChar = confirm("Click OK to confirm if you would like to special characters");
  //in case a parameter isn't chosen
  while (checkUpper === false && checkLower === false && checkNum === false && checkSpecialChar === false) {
    alert("Please choose at least one option for your password");
    var checkUpper = confirm("Click OK to confirm if you would like to include uppercase letters");
    var checkLower = confirm("Click OK to confirm if you would like to include lowercase letters");
    var checkNum = confirm("Click OK to confirm if you would like to include numbers");
    var checkSpecialChar = confirm("Click OK to confirm if you would like to special characters");
  }

  var passwordChar = [] 

  //concat merges the arrays create at the top, not sure they work
  if(checkUpper) {
    passwordChar = passwordChar.concat(alphaUpper)
  }

  if(checkLower) {
    passwordChar = passwordChar.concat(alphaLower)
  }

  if(checkNum) {
    passwordChar = passwordChar.concat(number)
  }

  if(checkSpecialChar) {
    passwordChar = passwordChar.concat(specialChar)
  }

  //not sure needed
  console.log(passwordChar)

  //empty string to be filled by parameters

  var randomPass = ""

  for (var i = 0; i < lengthPass; i++) {
    randomPass = randomPass + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    console.log(randomPass)
  }
  return randomPass
}

console.log(generatePassword);
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
