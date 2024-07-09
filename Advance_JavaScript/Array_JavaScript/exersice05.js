// find the maximum number in array number
let arrNumber = [11,22,33,44,55,66,77,88,99,100,1,2,3,4,5,6]
let getMaxNumber = arrNumber.reduce((previousValue,currentValue)=>previousValue>currentValue?previousValue:currentValue)
console.log(getMaxNumber);

// 10 vs 100
// - Maximum number is 100
// - Minimum number is 10