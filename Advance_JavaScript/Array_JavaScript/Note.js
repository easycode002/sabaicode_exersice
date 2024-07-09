// const arrNumber = [];
// let arrNumber = [];
// const cannot be reassign value to array
// let can be reassign value to array

// indexOf = find index of element មួយនឹង
// split only work in string
let arrObj = [ 
    {name: "Bread", category: "Grocery"}, 
    {name: "Butter", category: "Grocery"}, 
    {name: "Shampoo", category: "Personal Care"}
];

const result = arrObj.reduce((accumulator,current)=>{
    const {name,category}=current       // destructuring
    // console.log(name);
    // console.log(category);
    if(!accumulator[category]){     
        accumulator[category] = [];
    }
    accumulator[category].push(name)
    return accumulator
},{})
console.log(result);
