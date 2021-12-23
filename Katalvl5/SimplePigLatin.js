// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation 3 untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let newArr = str.split(" ");


    let finalResult = [];

    for ( let i = 0; i < newArr.length; i++){

        let splitedWord = newArr[i].split("");
      
       splitedWord.push(splitedWord[0] + "ay");
       splitedWord.shift();
       
       
       

       if( newArr[i] === "!" ||  newArr[i] === "?" || newArr[i] === "."){
           finalResult.push(newArr[i])
       }else{
        finalResult.push(splitedWord.join(""))
    
    }
  }
  return finalResult.join(" ")
}


  console.log(pigIt('Pig latin is c!ool'))

