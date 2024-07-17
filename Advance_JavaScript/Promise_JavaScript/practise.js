const mockDatabase = [
  { id: 1, name: 'sok' },
  { id: 2, name: 'sao' },
  { id: 3, name: 'pisey' }
];
function handleUserId(getId,getCallBack){
  setTimeout(()=>{
    const afterFilter = mockDatabase.find(user=>user.id ===getId)
    // console.log(afterFilter);
    if(afterFilter){
      getCallBack(null,afterFilter)
    }else{
      getCallBack(new Error("User not found in mock Db!"))
    }
  },2000)
}
function handleNameUpperCase(data,getCallBack){
  setTimeout(()=>{
    // console.log(data);
    if(data){
      // console.log(data);
      if(data.name.length>0){
        data.name = data.name.charAt(0).toUpperCase()+data.name.slice(1);
        data.name = data.name.toUpperCase();
      }
      getCallBack(null,data)
    }
    else getCallBack(new Error('User not found!!!'))
  },1500)
}
function handleUserIdAndInfor(getIdUser){
  handleUserId(getIdUser,(error,data)=>{
    if(error){
      console.error(error.message)
    }else{
      console.log(data);
      handleNameUpperCase(data,(error,result)=>{
        if(error){
          console.error(error);
        }else{
          console.log(`After uppercase name : `,result);
        }
      })
    }
  })
}
handleUserIdAndInfor(2)

// function readFile
// const fs = require('node:fs')
// function readFile(getFilepath){
//   return new Promise((resolve,reject)=>{
//     fs.readFile(getFilepath,'utf8',(error,data)=>{
//       if(!error){
//         resolve(`Context : ${data}`)
//       }else{
//         reject(error)
//       }
//     })
//   })
// }
// // writeFile
// function writeFile(getFilepath,contentText){
//   return new Promise((resolve,reject)=>{
//     fs.writeFile(getFilepath,contentText,(error)=>{
//       if(error){
//         reject((`Error write text to file!!!`))
//       }else {
//         resolve("Write text to file success!")
//       }
//     })
//   })
// }
// writeFile
// writeFile('output1.txt',"How are u?")
//   .then((successMessage)=>{
//     console.log(successMessage);
//   })
//   .catch(error=>{
//     console.log(error.message);
//   })
// readFile
// readFile('input.txt')
//   .then(data=>{
//     console.log(data);
//   })
//   .catch(error=>{
//     console.log(error);
//   })

// writeFile
// async function hanldeReadWrite(){
//   try{
//     // read from input.txt
//     const readInput = await readFile('input.txt');
//     console.log(`input.txt`,readInput);
//     // write output1
//     const writeInput1 = readInput + "\t First modification!";
//     await writeFile('./output1.txt',writeInput1)
//     console.log(`Write to output1.txt successfully`);
//     // read output1.txts
//     readOuput1 = await readFile('./output1.txt');
//     console.log(`Read from output1.txt ${readOuput1}`);
//     // write ouput2
//     const writeOutput2 = readOuput1 + "\t Second modification!"
//     await writeFile('./output2.txt',writeOutput2)
//     console.log(`Write output2.txt`);
//     // read output2
//     const readOutput2 = await readFile('./output2.txt')
//     console.log(`Read from output2.txt`,readOutput2);
//   }catch(error){
//     console.error(error);
//   }
// }
// hanldeReadWrite()
// module.exports = readFile
// module.exports = writeFile
// setTimeout(()=>{
//   console.log(`Hello from គ្រាបពេជ្រកម្ពុជា`);
// },2000)