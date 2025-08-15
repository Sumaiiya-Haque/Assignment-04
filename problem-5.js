function  resultReport( marks ) {
          // You have to write your code here
          if(!Array.isArray(marks)){
    return "Invalid"
}
if(marks.length === 0){
        return {
    'finalScore':0,
    'pass':0,
    'fail':0
}
}
let pass = [];
let fail = [];
for(let mark of marks){
    if(mark < 40){
        fail.push(mark)
    }
      if(mark >= 40){
        pass.push(mark)
    }
}

let finalScore = 0;
if(marks.length){
    for(let mark of marks){
    finalScore = finalScore + mark;
}

}
let finalAvg = finalScore / (marks.length)
    return {
    'finalScore':Math.floor(finalAvg),
    'pass':pass.length,
    'fail':fail.length

}

}

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));

