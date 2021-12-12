// An isogram is a word that has no repeating letters,
//  consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters
//   is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)

function isIsogram(str){
    
    if(str.empty){
        return true
    }
    let arr = str.toLowerCase().split("");
    let newArr = arr.sort();

    for (let i = 0; i < newArr.length; i++){
        if (newArr[i + 1] === newArr[i]  ){
            return false
        }
    }
   return true
  }

  console.log(isIsogram(""))