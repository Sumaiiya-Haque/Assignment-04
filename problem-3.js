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

console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 }));
console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }))
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }))
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"))
