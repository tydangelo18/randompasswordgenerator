let generateBtn = document.querySelector("#generate")

let specialCharacters = '~`!@#$%^&*()-_=+""{[}]\|:;<,>./?'

let lowerLetters = 'qwertyuiopasdfghjklzxcvbnm'

let upperLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'

let digits = '1234567890'

function writePassword() {
    let passwordLength = parseInt(prompt("Between 8 and 128 characters, how many characters would you like your password to be?"));

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose between 8 and 128 characters.")
        return writeLength();
        
    }
    let characterLower = window.confirm("Do you want lowercase characters?"); (true);

    if (confirm(characterLower)) {
        window.alert("Okay, lowercase added!")
        
    } else {
        window.alert("Okay, no lowercase.")
        
    }

    let characterUpper = window.confirm("Do you want uppercase characters?"); (true);

    if (confirm(characterUpper)) {
        window.alert("Okay uppercase added!")

    } else {
        window.alert("Okay, no uppercase.")
    }

    let characterSpecial = window.confirm("Do you want special characters?"); (true);

    if (confirm(characterSpecial)) {
        window.alert("Okay, special characters added!")

    } else {
        window.alert("Okay, no special characters.")
    }

}






generateBtn.addEventListener("click", writePassword); 

