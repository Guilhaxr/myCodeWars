// The goal of this exercise is to convert a string to a new string 
// where each character in the new string is "(" if that character appears only once
//  in the original string, or ")" if that character appears more than once in the original string.
//   Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. 
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){
let result = {};

let wordArr = word.toLowerCase().split("");


for(let i = 0; i < wordArr.length; i++){
    result[wordArr[i]] = (result[wordArr[i]] || 0) + 1;
}

let finalResult = wordArr.map((letter)=>result[letter] === 1 ? "(" : ")").join("");

return finalResult

}
console.log(duplicateEncode("Success"))

// 1 contar quantas letras existem na string
// 2 se for mais que uma letra converter a mesma para ')'
// 3 se for só uma letra converter para '('  