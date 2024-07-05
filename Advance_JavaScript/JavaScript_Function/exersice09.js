const calculateMedian = function(arr) {
    arr.sort((a, b) => a - b);
    if (arr.length % 2 === 1) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        const mid = arr.length / 2;
        return (arr[mid - 1] + arr[mid]) / 2;
    }
}

const numbers = [1, 2, 3, 4,5,23];
const median = calculateMedian(numbers);
console.log(`Median of [${numbers}] is: ${median}`); // Output: Median of [1, 2, 3, 4] is: 2.5
// How to to find medain in array number
// សេស​ កណ្ដាល = median
// គូរ លេខកណ្ដាល២ បូកចូលគ្នា ចែក២

