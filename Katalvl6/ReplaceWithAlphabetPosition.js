// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
    // let firstArry = text.split(" ")
    // console.log(firstArry)
    // let finalArr = firstArry.filter((e)=> e > -1 )
    // console.log(finalArr)

    let newArr = text.replace(/^[0-9]*$/g, "").replace(/\W+/g, "").toString().toLowerCase().split("")
    
    
    let result = [];
    
    for( let i = 0; i < newArr.length; i++){
        
          result.push(newArr[i].charCodeAt(0) - 97 + 1)
    }

    let finalResult = result.filter((e)=> e > -1 );

    return finalResult.join(" ")
    
  }

  console.log(alphabetPosition("2, b, -1, c"))
