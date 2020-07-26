// Password Characters Object
let password = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    number: '1234567890',
    special: '!@#$%^&*()_-+={[}]?'
};

// Empty Password Array with pushed object arrays
// let final = [].concat(password.upper, password.lower, password.number, password.special);

// Empty password array
let final = [];

// User confirm for uppercase characters
function passwordConfirmUpper() {
    let upperCase = confirm("Would you like upper case?");
    
    if (upperCase === true) {
        final.push(password.upper);
        console.log("Upper Added! ");
    } else {
        console.log("No Uppers! ")
    }
}

// User confirm for lowercase characters
function passwordConfirmLower() {
    let lowerCase = confirm("Would you like lower case?");
    
    if (lowerCase === true) {
        final.push(password.lower);
        console.log("Lowers Added! ");
    } else {
        console.log("No Lowers! ")
    }
}

// User confirm for numbers
function passwordConfirmNumber() {
    let numbers = confirm("Would you like numbers?");
    
    if (numbers === true) {
        final.push(password.number);
        console.log("Numbers Added! ");
    } else {
        console.log("No Numbers! ")
    }
}

// User confirm for special characters
function passwordConfirmSpecial() {
    let specialCharacters = confirm("Would you like special characters?");
    
    if (specialCharacters === true) {
        final.push(password.special);
        console.log("Specials Added! ");
    } else {
        console.log("No Specials! ")
    }
}

// Join indices to randomize. 
function passwordJoin() {
    
    // Joining indices 
    let finalPassword = final.join('');
    console.log(finalPassword);

    // Randomize the String (Returning the array randomized)
    let random = final.sort(() => Math.random() - 0.5);
    console.log(random);
}


    



passwordConfirmUpper();

passwordConfirmLower();

passwordConfirmNumber();

passwordConfirmSpecial();

passwordJoin();

// console.log(final);














