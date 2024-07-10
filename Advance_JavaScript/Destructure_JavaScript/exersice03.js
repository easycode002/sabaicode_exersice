// use destructuring to extract the street and city
const user = {
    id:1,
    name:"Sok",
    address:{
        street:"123 Mian St",
        city:"PP"
    }
}

const {id,name,address:{street,city}} = user
console.log(street);