// declearation function
function findGrade(endlish,khmer,computer,getTotalScore,getAverage,getCallBack){
    let totalScore = endlish + khmer + computer;
    let average = totalScore/3;
    getTotalScore(totalScore);
    getAverage(average);
    // check validate 
    if (average>=50){
        // return (`Your score is ${totalScore},So pass the exam!`)
        // return (`${average}`)
        getCallBack(`Your score is ${totalScore},So pass the exam!`)
    }else{
        // return (`You loss the score,\nSo you'er fail!`)
        getCallBack(`You loss the score,\nSo you'er fail!`)
    }
}
// declear varaible for store value of totalSc, totalAv, grade
let totalSr = 0;
let totalAv = 0;
let gd = "No grade!"


// call function and assign the argument to parameter
let grade = findGrade(20,30,200,
    // style anonymous function
    (total)=>{
        // console.log(`You total score is ${total}.`);
        totalSr = total;
    },
    // style anonymous function
    (avg)=>{
        // console.log(`Your average is ${avg}.`);
        totalAv = avg;
    },
    // style anonymous function
    (grade)=>{
        // console data
        // console.log(grade);
        gd = grade;
    }
);
// callFunction can return any type with u want to return
// console.log(`Total Score  : ${totalSr}`);
// console.log(`Your Average : ${totalAv}`);
// console.log(`${gd}`);
// or clg with sort hand is
console.log(`TotalScore is ${totalSr}\nYour Average is ${totalAv}\n${gd}`);