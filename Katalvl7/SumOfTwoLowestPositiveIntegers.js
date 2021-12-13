// Create a function that returns the sum of the two lowest positive numbers
//  given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.



// first solution 
// function sumTwoSmallestNumbers(numbers) {  
//     let result = [];
    
//     for (let i = 0; i < numbers.length; i++){
//      if(result.push(numbers[i] + numbers[i + 1]))
//      result.push(numbers[i] + numbers[i + 2] )
//      result.push(numbers[i] + numbers[i + 3] )
//      result.push(numbers[i] + numbers[i + 4] )
//   }
//   const newArr = result.filter(Boolean)
//   console.log(Math.min(...newArr))
// }


//second solution
function sumTwoSmallestNumbers(numbers) { 
    numbers = numbers.sort((a, b)=> a - b)
    for (let i = 0; i < numbers.length; i++){
        console.log(numbers[i] + numbers[(i + 1)])
    }
 }

// top solution
// function sumTwoSmallestNumbers(numbers){  
//     numbers = numbers.sort(function(a, b){return a - b; });
//     return console.log(numbers[0] + numbers[1]);
//   };


  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))

//   console.log(numbers[i] + numbers[i + numbers.length] )
//   console.log(numbers[i] + numbers[i + 2] )
// 15 - 43, 19, 17, 58
// 28 - 56, 32, 30, 71
// 4 - 32,  8,  6, 47
// 2 - 30, 6, 4 ,45
// 43 - 71, 47, 45, 86