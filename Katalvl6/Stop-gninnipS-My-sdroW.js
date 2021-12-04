// Write a function that takes in a string of one or more words, and returns the same string,
//  but with all five or more letter words reversed (Just like the name of this Kata).
//   Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    let result = [];
    let newArr = string.split(" ");
    let arrayOfArrays = [];
    
    
    while(newArr.length > 0 ){
        let arrayElement = newArr.splice(0,1)
        arrayOfArrays.push(arrayElement)
    }
   

   for( let i = 0; i < arrayOfArrays.length; i++){

    for( let j = 0; j < arrayOfArrays[i].length; j++){

        if(arrayOfArrays[i][j].length < 5){
            result.push(arrayOfArrays[i][j])
        }

        if(arrayOfArrays[i][j].length >= 5){
                result.push(arrayOfArrays[i][j].split("").reverse().join(""))
                
        }
        
    }
    
   }
   return console.log(result.join(" "))
  }

  spinWords("This is a test")