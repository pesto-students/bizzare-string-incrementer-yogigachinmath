function bizarreStringIncrementer(string) {
    let parsedString = "";
    for(let i = string.length - 1; i > -1; i-- ) {
        if(isNumber(string[i])) {
            parsedString = string[i] + parsedString;
        }  else 
            break;
    }

    // let noOfZeroes = countZeroes(parsedString);
    if(!parsedString) return string + "1";
    let incrementedNumber = (parseInt(parsedString, 10) + 1).toString();
    
    if(parsedString.length > incrementedNumber.length) {
        while(parsedString.length !== incrementedNumber.length) {
            incrementedNumber = "0" + incrementedNumber;
        } 
    }
    let remainingString = string.slice(0,string.length - parsedString.length);
    // console.log(remainingString + incrementedNumber);
    return remainingString + incrementedNumber;

}

function countZeroes(string) {
    let noOfZeroes = 0;
    for(let i of string) {
        if( i === "0")
            noOfZeroes++;
        else
            break;
    }
    return noOfZeroes;
}

function isNumber(char) {
    if(char >= "0" && char <= "9") 
        return true 
    return false;
}
//foo -> foo1
// bizarreStringIncrementer('foo1');
module.exports = { bizarreStringIncrementer };



