// Arrow function that takes an array of numbers and returns their average
const calAverage = (numbers) =>{
    // check, if in array is not empty
    if(numbers.length == 0){
        return (`Your array list is empty!`);
    }
    let totalSum = 0;
    for (let i=0; i<numbers.length; i++){
        totalSum += numbers[i];
    }
    const average  = totalSum/numbers.length;
    // return average
    return (`Average is :  ${average}`);
}

console.log(calAverage(
    [1,1,1,1,1,1]
))
// console.log(`The average of all item in array is : ${sum}`)
