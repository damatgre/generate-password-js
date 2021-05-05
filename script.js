// Assignment code here
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var alphaLower = "abcdefghijklmnopqrstuvwxyz"
var num = "0123456789"
var specialChar = "!()#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var lengthPass;
var checkNum;
var checkUpper;
var checkLower;
var checkSpecialChar;


//function to determine length
function length() {
  lengthPass = prompt("Choose how many character you'd like in your password. Must be between 8 and 128");

  if (lengthPass >= 8 && lengthPass <= 128) {
    alert("Please choose the parameters of your password using the next four prompts");
    length = lengthPass();

  } else if (lengthPass < 8 || lengthPass > 128) {
    alert("Password must be between 8 and 128 characters");
    length();
  }
};

//function to determine uppercase
function chooseUppercase() {
  checkUpper = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");

  if (checkUpper === null || checkUpper === "") {
    alert("Please type an answer")
    chooseUppercase();

  } else if 
    (checkUpper === "yes" || checkUpper === "Yes") {
    chooseUppercase = true;
    return checkUpper;

  } else if  
    (checkUpper === "no" || checkUpper === "n") {
    chooseUppercase = false;
    return checkUpper;

  } else {
    alert("Please answer Yes or No");
    chooseUppercase();
  }

  return checkUpper;
}

//function to check spelling and value for lowercase
function chooseLowercase() {
  checkLower = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");

  if (checkUpper === null || checkUpper === "") {
    alert("Please type an answer")
    chooseLowercase();

  } else if 
    (checkUpper === "yes" || checkUpper === "Yes") {
    chooseLowercase = true;
    return checkUpper;

  } else if  
    (checkUpper === "no" || checkUpper === "n") {
    chooseLowercase = false;
    return checkUpper;

  } else {
    alert("Please answer Yes or No");
    chooseLowercase();
  }

  return checkLower;
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
