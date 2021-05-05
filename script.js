// Assignment code here
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var specialChar = "!()#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
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
  checkNum = prompt("Do you want to include numbers in your password? \n(Yes or No)");

  if (checkLower === null || checkLower === "") {
    alert("Please type an answer")
    chooseLowercase();

  } else if 
    (checkLower === "yes" || checkLower === "Yes") {
    chooseLowercase = true;
    return checkNum;

  } else if  
    (checkLower === "no" || checkLower === "n") {
    chooseLowercase = false;
    return checkLower;

  } else {
    alert("Please answer Yes or No");
    chooseLowercase();
  }

  return checkLower;
}
 //function to choose number 
function chooseNumber() {
  checkNum = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");

  if (checkNum === null || checkNum === "") {
    alert("Please type an answer")
    chooseNumber();

  } else if 
    (checkNum === "yes" || checkNum === "Yes") {
      chooseNumber = true;
    return checkNum;

  } else if  
    (checkNum === "no" || checkNum === "n") {
      chooseNumber = false;
    return checkNum;

  } else {
    alert("Please answer Yes or No");
    chooseNumber();
  }

  return checkNum;
}

//function to choose number 
function chooseSpecChar() {
  checkSpecial = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");

  if (checkSpecial === null || checkSpecial === "") {
    alert("Please type an answer")
    chooseSpecChar();

  } else if 
    (checkSpecial === "yes" || checkSpecial === "Yes") {
      chooseSpecChar = true;
    return checkNum;

  } else if  
    (checkSpecial === "no" || checkSpecial === "n") {
      chooseSpecChar = false;
    return checkSpecial;

  } else {
    alert("Please answer Yes or No");
    chooseSpecChar();
  }

  return checkSpecial;
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
