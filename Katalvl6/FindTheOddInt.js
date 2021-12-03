// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// function findOdd(A) {
//    let counter= 0;
    
//     const NumInt =  A.sort((a, b)=> a - b);
//     console.log(NumInt);
//     for( let i = 0; i < NumInt.length; i++){
//         for(let k = 0; k < NumInt.length; k++){
//             if( NumInt[i] === NumInt[k]){
//                 counter++
//             }
//         }
//         if(console.log(counter) % 2 !== 0){
//             return NumInt[i]
//         }
//     }
 
// }
//   findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])

function findOdd(A) {
    
    let counter = {};

   const NumInt =  A.sort((a, b)=> a - b)

    NumInt.forEach((e)=>{counter[e] = (counter[e] || 0) +1})
    console.log(counter)

    for( const key in counter){
        if(counter[key] % 2 !==0){
            return console.log(Number(key))
        }
    }
  }

  findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])

// function aaa(n){
//     var count = {};
//     n.forEach(function(i) { count[i] = (count[i]||0) + 1;});
//     console.log(count);
// }
// aaa([1,1,1,1,1,1,10,1,1,1,1])