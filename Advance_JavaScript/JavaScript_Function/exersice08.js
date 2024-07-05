// const sortAscendingNumber = function(arr){
//     // make copy original arr
//     const originalArr = arr.slice();
//     arr.sort(function(a,z){
//         return a-z
//     })
//     return arr
// }
// const number = [2,1,3,4,5,0,6,'a',1,1]
// const sortNumber = sortAscendingNumber(number)
// // console.log(`Original Number is ${number}`)
// console.log(sortNumber)


// sort with bubble_sort
const bubbleSortNumber = (number) =>{
    for (let i = 0; i<number.length; i++){
        for (let j = i + 1; i<number.length;j++){
            if (number[i]>number[j]){
                let afterBubbleSort = number[i];
                number[i]=number[j]
                afterBubbleSort = number[i]
            }
        }
    }    
    return afterBubbleSort

}
console.log(afterBubbleSort);
const arrNumber = [1,2,3,6,3,9,5,40]

