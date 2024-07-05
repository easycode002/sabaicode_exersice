// create new anonymous function for calculate BMI(Body Mass Index)
// #way001=======================================
// const calBMI = function(weight,height){
//     const valBMI = weight/(height*height)
//     return valBMI;
// }

// // declear two function for w & h
// const w = 70, h = 1.75;
// const resultBMI = calBMI(w,h)   // strict in this line
// console.log(`${resultBMI}`)


// #way002=======================================
// invoke only one time
(function(){
    width = 50;
    height = 5;
    BMI = width/(height*height)
    console.log(BMI)
})();
