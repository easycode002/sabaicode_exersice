// create new anonymous function for calculate BMI(Body Mass Index)
const calBMI = function(weight,height){
    const valBMI = weight/(height*height)
    return valBMI;
}

// declear two function for w & h
const w = 70, h = 1.75;
const resultBMI = calBMI(w,h)   // strict in this line
console.log(`${resultBMI}`)