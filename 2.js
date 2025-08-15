
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
console.log(onlyCharacter(true ))