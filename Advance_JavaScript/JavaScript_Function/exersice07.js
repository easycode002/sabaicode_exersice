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
// const countVowel = function(string) {
//     string = string.toLowerCase();
//     let count = 0;
//     allVowel = [];
//     for (let char of string) {
//         // Check if the character is a vowel
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//             allVowel.push(char)
//         }
//     }
//     return count;
// }

// const inputString = "SabaiCode";
// console.log(`Number of vowels in "${inputString}": ${countVowel(inputString)}`);
// console.log(allVowel)

// of use with array
// in use with obj



// #Way003==============================================
// Problem Solving:
//      - Step: 1-Get each character from the sentence(from string input)
//      - Step: 2-Compare each char(sentence) to vowel (a,e,i,o,u)
function findVowel(string){
    // convert string to អក្សរតូចទាំងអស់
    const stringLowerCase = string.toLowerCase();
    let stringCount = 0;
    for (let i = 0; i<string.length; i++){
        if (stringLowerCase[i] === 'a' || stringLowerCase[i] === 'e' || stringLowerCase[i] === 'i' || stringLowerCase[i] === 'o' || stringLowerCase[i] === 'u'){
            stringCount ++;
        }
    }
    return stringCount;
}
// let inputString = "Hello word!";
console.log(findVowel("Hello world"));