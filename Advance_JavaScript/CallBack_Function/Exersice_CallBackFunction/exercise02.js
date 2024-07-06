// Step: 1-create function take array and callback
// Step: 2-use callback if number arr is even
// Step: 3-use callback to filter the array

// #Way001===================================================
// Declear, Declearation function
// function arrayFilter (arrNumber,getCallBack){
//     return arrNumber.filter(getCallBack);
// }
// const arr = [3,5,3,1,9,6,7,4,2,2]
// // define callback function to check if num is even
// const isEven = function(num){
//     return num%2==0
// }
// // call the arrayFilter with array Number and if number is even
// const evenNumber = arrayFilter(arr,isEven)
// // console data
// console.log(evenNumber);


// #Way002===================================================
function filterArray(arr, callback) {
    const filteredArray = [];
    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // Call the callback function to check the condition
      if (callback(arr[i])) {
        filteredArray.push(arr[i]); // Add the element to filteredArray if condition is true
      }
    }
    return filteredArray;
  }
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6,2,4,4,4];
  // Define a callback function to check if a number is even
  const isEven = function(num) {
    return num % 2 === 0;
  };
  // Call the filterArray function with the numbers array and the isEven callback
  const evenNumbers = filterArray(numbers, isEven);
  console.log(evenNumbers); // Output: [2, 4, 6]
  