let generateBtn = document.querySelector("#generate"); //selects button element to generate a password when clicked.

let specialCharacters = '~`!@#$%^&*()-_=+""{[}]|:;<,>./?'; //global variable

let lowerLetters = "qwertyuiopasdfghjklzxcvbnm"; //global variable

let upperLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"; //global variable

let digits = "0123456789"; //global variable

let availableCharacters = []; // The box that holds all of the characters based on the criteria that the user selects (Lower, Upper, Special, Number)

let guaranteedCharacters = []; // Will turn into Final Password.

// Receive Password Criteria from the user.

function createPassword() {
  let passwordLength = 0;
  // User must select between 8 and 128 and must be a nukber
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt(
      "Between 8 and 128 characters, how many characters would you like your password to be?"
    );
  }

  // Add in if statements for user to see which cirteria they've selected.

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

  //Add selected user password criteria into finalPassword Array.

  // if (passwordLength >= 8) {
  //   finalPassword.push(...finalPassword);
  // }

  // Check the confirm windows

  if (characterLower === true) {
    guaranteedCharacters.push(random(lowerLetters));
    availableCharacters.push(lowerLetters);
  }

  if (characterUpper === true) {
    guaranteedCharacters.push(random(upperLetters));
    availableCharacters.push(upperLetters);
  }

  if (characterSpecial === true) {
    guaranteedCharacters.push(random(specialCharacters));
    availableCharacters.push(specialCharacters);
  }

  if (characterNumber === true) {
    guaranteedCharacters.push(random(digits));
    availableCharacters.push(digits);
  }

  for (let i = guaranteedCharacters.length + 1; i < passwordLength; i++) {
    guaranteedCharacters.push(random(availableCharacters));
  }
  // if (finalPassword.length != 0) {
  //   final(finalPassword, passwordLength); //must make sure user selected at least one criteria
  // } else {
  //   alert("Please select enough criteria to generate a password.");
  //   return createPassword();
  // }
  console.log(guaranteedCharacters);
  return guaranteedCharacters.join("");
}

function random(characterString) {
  let randomIndex = Math.floor(Math.random() * characterString.length);
  return characterString[randomIndex];
}

function final() {
  let password = createPassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
}

generateBtn.addEventListener("click", final);
