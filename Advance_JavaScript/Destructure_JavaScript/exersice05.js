function handleSum(...args) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}

console.log(handleSum(1, 2)); // Output: 3
console.log(handleSum(1, 2, 3, 4, 5)); // Output: 15
