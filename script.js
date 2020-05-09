let generateBtn = document.querySelector("#generate") //selects button element to generate a password when clicked.


 //add an event listener to button element.

let specialCharacters = '~`!@#$%^&*()-_=+""{[}]\|:;<,>./?'; //global variable

let lowerLetters = 'qwertyuiopasdfghjklzxcvbnm'; //global variable

let upperLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'; //global variable

let digits = '0123456789'; //global variable

let finalPassword = []; // create an empty array to add results to based on user prompts. 


// Receive Password Criteria from the user. 

function createPassword() {
    
    let passwordLength = prompt("Between 8 and 128 characters, how many characters would you like your password to be?");
    
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose between 8 and 128 characters.")
        return createPassword();
        
    }  

    // Add in if statements for user to see which cirteria they've selected. 

    let characterLower = window.confirm("Do you want lowercase characters? (OK = Yes, Cancel = No)");

    if (characterLower === true) {
        alert("Okay, lowercase added!");
    }


    let characterUpper = window.confirm("Do you want uppercase characters? (OK = Yes, Cancel = No)");

    if (characterUpper === true) {
        alert("Okay, uppercase added!");
    }

    
    let characterSpecial = window.confirm("Do you want special characters? (OK = Yes, Cancel = No)");

    if (characterSpecial === true) {
        alert("Okay, special characters added!");
    }

    
    let characterNumber = window.confirm("Do you want numbers? (OK = Yes, Cancel = No)");

    if (characterNumber === true) {
        alert("Okay, numbers added!");
    }
    

    
    //Add selected user password criteria into finalPassword Array. 

    if (passwordLength >=8) {
        finalPassword.push(...finalPassword);
    }

    if (characterLower === true) {
        finalPassword.push(...lowerLetters);
    }

    if (characterUpper === true) {
        finalPassword.push(...upperLetters);
    }

    if (characterSpecial === true) {
        finalPassword.push(...specialCharacters);
    }

    if (characterNumber === true) {
        finalPassword.push(...digits);
    }

    if (finalPassword.length !=0) {
        final(finalPassword, passwordLength); //must make sure user selected at least one criteria
    }

    else {
        alert("Please select enough criteria to generate a password.")
        return createPassword();
    }

    

}


// Generate Random Password using math.random from the pushed array

function final(finalPassword, passwordLength) {
    function random(array) {
        array.sort(() => Math.random() -0.5);
    }

    random(finalPassword);
    document.getElementById("password").innerHTML = 
        finalPassword.slice(0, passwordLength).join("");
}



generateBtn.addEventListener("click", createPassword); // add an Event Listener to the button element. 





