// Take 2 strings s1 and s2 including only letters from ato z.
//  Return a new sorted string, the longest possible,
//   containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let newS = s1.concat(s2).split("").sort();
    let finalResult = [];
  
    for ( let i = 0; i < newS.length; i ++){
        if ( newS[i] != newS[i + 1]){
            finalResult.push(newS[i]);
        }
    }
    return finalResult.join("")
  }

  console.log(longest("aretheyhere", "yestheyarehere"))