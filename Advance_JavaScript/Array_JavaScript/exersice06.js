// group obj by categories
let arrObj = [ 
    {name: "Bread", category: "Grocery"}, 
    {name: "Butter", category: "Grocery"}, 
    {name: "Shampoo", category: "Personal Care"}
];

let groupCategories = arrObj.reduce((result,current)=>{
    if(result[current.category]){
        result[current.category].push(current.name)
    }else{
        result[current.category] = [current.name]
    }
    return result
},{})
console.log(groupCategories);
