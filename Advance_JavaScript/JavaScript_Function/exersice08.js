const sortAscendingNumber = function(arr){
    // make copy original arr
    const originalArr = arr.slice();
    arr.sort(function(a,z){
        return a-z
    })
    return arr
}

const number = [2,1,3,4,5,0,6,'a',1,1]
const sortNumber = sortAscendingNumber(number)
// console.log(`Original Number is ${number}`)
console.log(sortNumber)