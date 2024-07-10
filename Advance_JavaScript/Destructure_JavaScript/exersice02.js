// use object destructuring to extract the ‘name’ & ‘age’ properties and console.log it out
const person = {
    name: "Alice", 
    age: 25, 
    job: "Developer"
}

const {name,age,job} = person
console.log(`Name : ${name}, age : ${age}`);
