// #01=========================================
// const arrayList = [];
// push use for add item to array
// arrayList.push(1)
// arrayList.push(1,2,3,4,5,6)
// pop use for remove all item in arrList
// arrayList.pop()
// console.log(arrayList);


// #02=========================================
// How to access array in obj
arrayObj = [
    {name:"Sothea",year:3},
    {name:"Smey",year:4},
    {name:"Sophol",year:2}
];
// use for add new item(obj) to arrayListt
let newItem = {name:"Roem Reaksmey",year:2}
let insertIndex = 4;
arrayObj.splice(insertIndex,0,newItem)

// replace item(obj) in arraylist with specific number
// arrayObj[2]={name:"Seray Sunteang",year:2}
console.log(arrayObj);