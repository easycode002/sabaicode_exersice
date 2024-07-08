// Step : 1-write function take an array
// Step : 2-use callback function that process each element of array
// Step : 3-use the callback function for calculate square in array number

// Declear, Declearation has 2 paramenter
function callBackFunction (arrNumber,getCallBack){
    // create new var for store each element of array after loop
    const result = [];
    for (let i = 0;i<arrNumber.length;i++){
        // add the item in array to arr `result`
        result.push(getCallBack(arrNumber[i]))
    }
    // return data
    return result
}
// arrNumber 
const numbers = [1,2,3,4,5,6,7];
// define callback function
const sqCallBack = function(num){
    return num * num
}
// invoke callBackFunction with the number of array with squarecallBack
const sqNumber = callBackFunction(numbers,sqCallBack)


// console.log(`${sqNumber}`);
console.log(sqNumber);