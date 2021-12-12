// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    let newArr = str.toLowerCase().split("");
    let countO = 0;
    let countX = 0;

    for( let i = 0; i < newArr.length; i++ ){
        if( newArr[i] === "x"){
            countX++;
        }else if( newArr[i] === "o"){
            countO++
        }
    }

    if( countO === countX){
        return true
    }else{
        return false
    }

}

console.log(XO("ooom"))