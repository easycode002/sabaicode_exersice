// way01 =================================================
// find the maximum number in array number
// let arrNumber = [11,22,33,44,55,66,77,88,99,100,1,2,3,4,5,6]
// let getMaxNumber = arrNumber.reduce((previousValue,currentValue)=>previousValue>currentValue?previousValue:currentValue)
// console.log(getMaxNumber);

// 10 vs 100
// - Maximum number is 100
// - Minimum number is 10

let arrNumber = [11,22,33,44,55,66,77,88,99,100,1,2,3,4,5,6]
function maxNumber(total,value){
    if(total>value){
        return total
    }else{
        return value
    }
}

console.log(arrNumber.reduce(maxNumber,0));
// maxNumber it's callback function
// 0 = inital default value to `total`