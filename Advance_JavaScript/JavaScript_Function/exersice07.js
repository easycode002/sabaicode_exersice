// #Way001==============================================
// const countVowel = function(string){
//     // convert string from input to all lowercase
//     string = string.toLowerCase();
//     // define all vowel in english
//     const vowels = ['a','e','i','o','u'];
//     // declear new var for store if vowel 
//     let count = 0;
//     for (let char of string){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// const inputString = "SabaiCode"
// console.log(`Number of vowel is ${countVowel(inputString)} in ${inputString}`);

// #Way002==============================================
const countVowel = function(string) {
    string = string.toLowerCase();
    let count = 0;
    allVowel = [];
    for (let char of string) {
        // Check if the character is a vowel
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
            allVowel.push(char)
        }
    }
    return count;
}

const inputString = "SabaiCode";
console.log(`Number of vowels in "${inputString}": ${countVowel(inputString)}`);
console.log(allVowel)
