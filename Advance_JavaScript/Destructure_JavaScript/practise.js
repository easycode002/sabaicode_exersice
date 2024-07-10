// E 007===============================
// // filter with string without b, d
// function filterPropertiesObj(obj,...propsToFilter){
//     // new empty obj
//     const afterFilter = {}
//     for(let currentValue in obj){
//         if(!propsToFilter.includes(currentValue)){
//             afterFilter[currentValue] = obj[currentValue]
//         }
//     }
//     return afterFilter
// }
// const object = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }
// console.log(filterPropertiesObj(object,"b","d"));

// Given the array of `colors` [“Red”, “Blue”, “Green”], use array destructuring to extract the first and third elements of the array
// const array = ["Red","Blue","Green"]
// const  [first,,last] = array
// console.log(first);
// console.log(`${last}`);

// Given the object of person {name: “Alice”, age: 25, job: “Developer”}, use object destructuring to extract the ‘name’ & ‘age’ properties and console.log it out
// const obj = {
//     name:"Sothea",
//     age:12,
//     job:"Full Stack Web Developer"
// }
// const {name,age,job} = obj
// console.log(`${name} and age : ${age}`);

// Given the object user { id: 1, name: “Sok”, address: {street: “123 Main St”, city: “PP”}}, use destructuring to extract the street and city
// const objPerson = {
//     id:1,
//     name:"Sothea",
//     address:{
//         street:"123 main st",
//         city:"PP"
//     }
// }
// const {id,name,address:{street,city}
// } = objPerson
// console.log(`Stree ${street} and City ${city}`);

// Given two arrays of nums1 and nums2, merge them into a new array:
// Nums1 = [1, 2, 3]
// Nums2 = [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]
// Nums1 = [1, 2, 3]
// Nums2 = [4, 5, 6]
// const arr = [...Nums1,...Nums2]
// console.log(arr);

// Write a function that could take any number of arguments and calculates their sum and return it
// function handleSum(...number){
//     let total = 0
//     for (let item of number){
//         total += item
//     }
//     return total
// }
// console.log(handleSum(1,2));

// Given the array ‘points’, extract the first point into a variable and store remaining points in an array
// Example: points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}]
//                    console.log(firstPoint) // {x: 1, y: 2}
//                    console.log(otherPoints) // [{x:2, y:3}, {x:3, y:4}]
// points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}]
// const [first,...rest] = points
// console.log(first);
// console.log(rest);