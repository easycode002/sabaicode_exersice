// ex01=================================================
// asynchronous callback function with anonymous function
// for (let i=0;i<=200;i++){
//     console.log(i);
// }   
// setTimeout(()=>console.log("hello world"),3000)

// ex02=================================================
// setInterval(()=>{
//     console.log(`Hello`);
// },1000)

// ex03=================================================
setInterval(()=>{
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
},5000)

// asynchronous ទាល់តែការចប់ទើបវាបោះតម្លៃអោយយើងវិញ​
// example : retreive data from api, if it complete it will be return data u request.

