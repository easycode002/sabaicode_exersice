const fs = require('fs')

function handleWrite(getFilepath,getCallback){
    const content = getCallback();
    fs.writeFile(getFilepath,content,(err)=>{
        if (err){
            console.log(err);
        }else{
            console.log(`String is writed!`);
        }
    })
}

handleWrite('practise_file.txt',()=>(`Hello`))