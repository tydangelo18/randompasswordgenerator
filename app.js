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
    
    // If user chooses yes
    if (upperCase === true) {
        function shuffleUp(u) {
            // Split the array in order to shuffle it
            let upperArray = u.split('');
            console.log("Upper Added! ");
            // Shuffle the Array
            upperArray.sort(function() {
                return 0.5 - Math.random();
            });
            // Convert shuffled array to string
            u = upperArray.join('');
            return u;
        }
    
        let u = password.upper;
        
        // Call shuffleUp function
        u = shuffleUp(u);

        // Push the shuffled string into final password array
        final.push(u);
        
    // If user chooses no, move on to next confirm
    } else {
        console.log("No Uppers! ")
    }
}


// User confirm for lowercase characters
function passwordConfirmLower() {
    let lowerCase = confirm("Would you like lower case characters?");
    
    // If user chooses yes
    if (lowerCase === true) {
        function shuffleLow(l) {
        // Split the array in order to shuffle it
        let lowerArray = l.split('');
        console.log("Lowers Added! ");
        // Shuffle the array
        lowerArray.sort(function() {
            return 0.5 - Math.random();
        });
        // Convert Array to string
        l = lowerArray.join('');
        return l;
    }

    let l = password.lower;

    // Call shuffleLow function
    l = shuffleLow(l);

    // Push the shuffled String into the final password array
    final.push(l);

    // If user chooses no, move on to next confirm
    } else {
        console.log("No Lowers! ")
    }
}

// User confirm for numbers
function passwordConfirmNumber() {
    let numbers = confirm("Would you like numbers?");
    
    // If user chooses yes
    if (numbers === true) {
        function shuffleNum(n) {
        // Split the array in order to shuffle it
        let numArray = n.split('');
        console.log("Numbers Added! ");
        // Shuffle the array
        numArray.sort(function() {
            return 0.5 - Math.random();
        });
        // Convert Array to string
        n = numArray.join('');
        return n;
    }

    let n = password.number;

    // Call ShuffleNum Function
    n = shuffleNum(n);

    // Push the shuffled String into the final password array
    final.push(n);

    // If user chooses no, move on to next confirm
    } else {
        console.log("No Numbers! ")
    }
}

// User confirm for special characters
function passwordConfirmSpecial() {
    let specialCharacters = confirm("Would you like special characters?");
    
    // If user chooses yes
    if (specialCharacters === true) {
        function shuffleSpec(s) {
        // Split the array in order to shuffle it
        let specArray = s.split('');
        console.log("Specials Added! ");
        // Shuffle the array
        specArray.sort(function() {
            return 0.5 - Math.random();
        });

        s = specArray.join('');
        return s;
    }

    let s = password.special;

    // Call shuffleSpec function
    s = shuffleSpec(s);

    // Push the shuffled string into final array
    final.push(s);

    // If user chooses no, move on to next confirm
    } else {
        console.log("No Specials! ")
    }
}

/**
 * TODO: Combine all strings in the final array into one string
 * * let joinArr = final.join('');
 * TODO: Shuffle the string
 * * Create a function
 *  ! .split('');
 *  ! .sort(Math.random);
 *  ! .join('');
 *  ! push(x);
 *      ? Follow the previous 4 inner functions
 * TODO: limit the string to the number that the user chooses
 * * for loop?
 * TODO: display the string (password) in the HTML (DOM)
 * * DOM Manipulation
 */


// Function calls
passwordConfirmUpper();

passwordConfirmLower();

passwordConfirmNumber();

passwordConfirmSpecial();

console.log(final);















