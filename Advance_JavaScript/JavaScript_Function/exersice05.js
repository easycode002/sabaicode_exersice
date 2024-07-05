// write a function take a parameter that an array of obj representing product, than filter out product qt = 0
// const filterProduct = (products) =>{
//     return products.filter(product=>product.quantiy>0)
// };

// // array of obj
// const arrProducts = [
//     {
//         name:"iPhone 21 Pro Max",
//         price:150,
//         quantiy:10
//     },
//     {
//         name:"MacBook Pro M4",
//         price:50,
//         quantiy:20
//     },
//     {
//         name:"iWatch",
//         price:200,
//         quantiy:5
//     },
//     {
//         name:"AirPort Pro",
//         price:100,
//         quantiy:0
//     }
// ];
// // how to access obj in arr
// // console.log(arrProducts)
// // Call filterProduct function to filter products with quantity > 0
// const productAfterFilter = filterProduct(arrProducts)
// console.log('The product has qt create than 0 is',productAfterFilter)



// #Way 002=========================================================
// const filterProduct = (product) =>{
//     let AfterFilter = []
//     for (let i=0; i<product.length;i++){
//         if (product[i].quantiy>0){
//             AfterFilter.push(product[i].name)
//         }
//     }
//     return AfterFilter;
// }
const arrProducts = [
    {
        name:"iPhone 21 Pro Max",
        price:150,
        quantiy:10
    },
    {
        name:"MacBook Pro M4",
        price:50,
        quantiy:20
    },
    {
        name:"iWatch",
        price:200,
        quantiy:5
    },
    {
        name:"AirPort Pro",
        price:100,
        quantiy:0
    }
];

// // return arr of obj
// let productNamesWithQuantity = [];
// const productAfterFilter = filterProduct(arrProducts);
// // console.log('The product after filter is : ',productAfterFilter)

// // if u want to return the product with specific key in obj
// productAfterFilter.forEach(name => {
//     productNamesWithQuantity.push(name);
// });
// console.log('Product names with quantity > 0:', productNamesWithQuantity);


// #Way 003=========================================================
const filterProduct2 = arrProducts.filter(item=>item.quantiy>0)
console.log(filterProduct2);

