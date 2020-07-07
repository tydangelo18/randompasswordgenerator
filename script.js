let generateBtn = document.querySelector("#generate"); //selects button element to generate a password when clicked.

let specialCharacters = '~`!@#$%^&*()-_=+""{[}]|:;<,>./?'; //global variable

let lowerLetters = "qwertyuiopasdfghjklzxcvbnm"; //global variable

let upperLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"; //global variable

let digits = "0123456789"; //global variable

let availableCharacters = []; // The box that holds all of the characters based on the criteria that the user selects (Lower, Upper, Special, Number)



// Receive Password Criteria from the user.

function createPassword() {
  let passwordLength = prompt(
      "Between 8 and 128 characters, how many characters would you like your password to be?"
    );

  // Add in if statements for user to see which criteria they've selected.

  let characterLower = window.confirm(
    "Do you want lowercase characters? (OK = Yes, Cancel = No)"
  );

  let characterUpper = window.confirm(
    "Do you want uppercase characters? (OK = Yes, Cancel = No)"
  );

  let characterSpecial = window.confirm(
    "Do you want special characters? (OK = Yes, Cancel = No)"
  );

  let characterNumber = window.confirm(
    "Do you want numbers? (OK = Yes, Cancel = No)"
  );

//1 User input is a number between 8 and 128 from the prompt 
//2. number selected becomes the number of characters in the final password array

  //Add selected user password criteria into finalPassword Array.

  // if (passwordLength >= 8) {
  //   finalPassword.push(...finalPassword);
  // }

  // Check the confirm windows

  if (characterLower === true) {
    userConfig.lowerCase = true;
  }

  if (characterUpper === true) {
    availableCharacters.push(upperLetters);
  }

  if (characterSpecial === true) {
    availableCharacters.push(specialCharacters);
  }

  if (characterNumber === true) {
    availableCharacters.push(digits);
  }

  let userConfig ={
    lowerCase: false,
    upperCase: false,
    specialChars: false,
    digits: false,
    passwordLength: passwordLength
  }

  console.log(userConfig);
  return userConfig
  
}
  
  //  if (finalPassword.length != 0) {
  //    final(finalPassword, passwordLength); //must make sure user selected at least one criteria
  //  } else {
  //    alert("Please select enough criteria to generate a password.");
  //    return createPassword();
  //  }


function randomIndex(totalLength){
  return Math.floor(Math.random() * totalLength)
}

function random(availableCharacters) {
  let randomIndex = Math.floor(Math.random() * availableCharacters.length);
  return availableCharacters[randomIndex];
}

function final() {
  let password = createPassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
}

generateBtn.addEventListener("click", final);
