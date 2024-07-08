// write a callback function for getFilepath, can write string to `.txt` file

const fs = require('fs')    // fs = file system
function writeFileAsync(getFilePath,getCallBack){
    // declear new varaible for reveive value from getCallBack
    const contentFile = getCallBack();
    // define asynchronous function with 3 parameter(filePath,content,error)
    fs.writeFile(getFilePath,contentFile,(error)=>{    // the error(param.) is callback function for handle error if file not write success
        if(error){
            console.log(`Error writing file:`,error);
        }else{
            console.log(`File written successfully!`);
        }
    });
}
writeFileAsync('exersice04.txt',()=>('How are U?'))

exports.module = writeFileAsync();

module.exports  =writeFileAsync