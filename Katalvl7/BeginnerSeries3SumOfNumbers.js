// Given two integers a and b, which can be positive or negative,
//  find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b )
{
   let result = 0;
   let min = 0;
   let max = 0;

   if( a === b){
       return a
   }
   if ( a < b) {
       min = a;
       max = b;
   } else {
       min = b;
       max = a;
   }

   for ( let i = min; i <= max; i++){
      result += i;
   }    
   return result
}


console.log(getSum(-1, 2))