// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true


const isValid = (s) => {
    const newArr = s.split("");
     let newString = [];

    for( let i = 0; i < newArr.length; i++){
        if( newArr[i] === "(" && ")" || newArr[i] === "{" && "}" || newArr[i] === "[" && "]"){
           newString.push(newArr[i])
        } 
        console.log(newString)
    }
};

console.log(isValid("([])"))


// const isValid = (s) => {
//     let str = s;
//     for (let i = 0; i < s.length; i++) {
//         console.log(str)
//       if (str.includes("()")) {
//         str = str.replace("()", '');
//       } else if (str.includes("{}")) {
//         str = str.replace("{}", '');
//       } else if (str.includes("[]")) {
//         str = str.replace("[]", '');
//       } else if (str.length < 1) {
//         return true;
//       } else {
//         return false;
//       }
//     }
  
//     return str;
//   };