// #Way001 ==========================================================
// const isStrongPassword = (password)=>{
//     if(password.length>=8){
//         return ('strong!');
//     }else{
//         return ('not strong!')
//     }
// }

// const password001 = "123";
// console.log(`This password is ${isStrongPassword(password001)}`)


// #Way002 ==========================================================
const isStrongPassword = (password) => {
    if (password.length < 8) {
        return false;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()\-_=+{};:<>,.?]/.test(password); // Add more special characters as needed
    if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
        return ("Password is strong!")
    } else {
        return ("Password is not strong!")
    }
}

const password1 = "123A4567@8a"; // Not strong (missing uppercase letter and special character)
const password2 = "StrongPassword123!"; // Strong (includes uppercase, lowercase, digit, and special character)
console.log(`Is "${password1}" ${isStrongPassword(password1)}`); // Output: Is "12345678a" a strong password? false
console.log(`Is "${password2}" ${isStrongPassword(password2)}`); // Output: Is "StrongPassword123!" a strong password? true
