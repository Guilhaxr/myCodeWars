// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let newArr = s.split(" ");
    let minWord = [];

    for ( let i = 0; i < newArr.length; i++){
        minWord.push(newArr[i].length)
        
    }
    let finalResult = minWord.map(Number);
    
    
    return Math.min(...finalResult)
}

console.log(findShort("turns out random test cases are easier than writing out basic ones"))