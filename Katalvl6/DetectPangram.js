// A pangram is a sentence that contains every single letter of the alphabet at least once.
//  For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
//   because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
//  Ignore numbers and punctuation.

function isPangram(string){
    let alphabet = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
    let result = {};
    let keysLetters = [];
   

    let newArr = string.toLowerCase().replace(/[^A-Za-z]/g, "").split("").sort();

    for(let i = 0; i < newArr.length; i++){
        result[newArr[i]] =( result[newArr[i]] || 0 ) + 1;
    }
  
    Object.keys(result).forEach((key, index)=>{
        keysLetters.push(key)
    })

   if( keysLetters.toString() === alphabet.toString()){
       return true
   }else {
       return false
   }

  
    
    

    

  }

  console.log(isPangram("The quick brown fox jumps 333over the lazy dog."))

