// Complete the solution so that it returns true if the first argument(string)
//  passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return console.log(str.endsWith(ending))


  }

  solution('sumorai', 'rai')


//   function solution(str, ending){
//     const arrStr = str.split("").reverse();
//     const arrEnd = ending.split("").reverse();
//     if( arrStr[0] && arrStr[1] === ending[0] && ending[1]|| arrStr[0] && arrStr[1] && arrStr[2] === ending[0] && ending[1] && ending[2]){
//         return console.log(true)
//     } else{
//         return console.log(false)
//     } 
//   }
 