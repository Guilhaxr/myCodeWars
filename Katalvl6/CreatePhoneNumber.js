// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

const createPhoneNumber = (numbers) => {
    let firstNumbs = "";
    let middleNumbs = "";
    let lastNumbs = ""; 
   
   firstNumbs = numbers.slice(0, 3).join("");
   middleNumbs = numbers.slice(3, 6).join("");
   lastNumbs = numbers.slice(6, 10).join("");

   let result  = `(${firstNumbs}) ${middleNumbs}-${lastNumbs}`;
    return result  
}

//other solution
// function createPhoneNumber(numbers){
//   let format = "(xxx) xxx-xxxx";
  
//   for(let i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])