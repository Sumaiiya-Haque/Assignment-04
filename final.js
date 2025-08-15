function totalFine(fare){
     // You have to write your code here
    if(typeof fare !== 'number' || fare <= 0){
        return 'Invalid';
    }
    const fine = fare + fare * (20 / 100) + 30;
    return fine;
}

function  onlyCharacter( str ) {
          // You have to write your code here
      if(typeof str !== 'string'){
        return 'Invalid';
    }
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            newStr = newStr + str[i];
        }
    }
    return newStr.toUpperCase();
}

function  bestTeam( player1, player2 ) {
          // You have to write your code here
if(typeof player1 !== 'object' || typeof player2 !== 'object' || Array.isArray(player1) || Array.isArray(player2)){
        return 'Invalid';
    }
const sum1 = player1.foul + player1.cardY + player1.cardR;
const sum2 = player2.foul + player2.cardY + player2.cardR;
if(sum1 < sum2){
    return player1.name;
}
else if(sum1 === sum2){
    return "Tie";
}
else{
    return player2.name;
}
}


function  isSame(arr1 , arr2 ) {
          // You have to write your code here
if(!Array.isArray(arr1) || !Array.isArray(arr2)){
    return "Invalid"
}
  if(arr1.length !== arr2.length) return false;

  for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;

}


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
