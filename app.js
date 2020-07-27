// Password Characters Object
let password = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    number: '1234567890',
    special: '!@#$%^&*()_-+={[}]?'
};

// Empty password array
let final = [];

// User confirm for uppercase characters
function passwordConfirmUpper() {
    // User Confirm Upper Char
    let upperCase = confirm("Would you like upper case characters?");
    
    // If user chooses yes, push upper string to final array
    if (upperCase === true) {
        function shuffle(s) {
            final.push(password.upper);
        console.log("Upper Added! ");
            //
            final.sort(function() {
                return 0.5 - Math.random();
            });
            // Convert Array to string
            s = final.join('');
            return s;
        }
    
        let s = final;
    
        s = shuffle(s);
    
        console.log(s);
        
    
    // If user chooses no, move on to next confirm
    } else {
        console.log("No Uppers! ")
    }

    
}




// User confirm for lowercase characters
function passwordConfirmLower() {
    let lowerCase = confirm("Would you like lower case characters?");
    
    // If user chooses yes, push lower string to final array
    if (lowerCase === true) {
        final.push(password.lower);
        console.log("Lowers Added! ");

    // If user chooses no, move on to next confirm
    } else {
        console.log("No Lowers! ")
    }
}

// User confirm for numbers
function passwordConfirmNumber() {
    let numbers = confirm("Would you like numbers?");
    
    // If user chooses yes, push number string to final array
    if (numbers === true) {
        final.push(password.number);
        console.log("Numbers Added! ");

    // If user chooses no, move on to next confirm
    } else {
        console.log("No Numbers! ")
    }
}

// User confirm for special characters
function passwordConfirmSpecial() {
    let specialCharacters = confirm("Would you like special characters?");
    
    // If user chooses yes, push special string to final array
    if (specialCharacters === true) {
        final.push(password.special);
        console.log("Specials Added! ");

    // If user chooses no, move on to next confirm
    } else {
        console.log("No Specials! ")
    }
}

// Shuffle final array to make it truly random
// function shuffle(s) {
//     //
//     final.sort(function() {
//         return 0.5 - Math.random();
//     });
//     // Convert Array to string
//     s = final.join('');
//     return s;
// }





passwordConfirmUpper();

passwordConfirmLower();

passwordConfirmNumber();

passwordConfirmSpecial();

// let s = final;
// 
// s = shuffle(s);
// 
// console.log(s);

// shuffle();

// console.log(final);














