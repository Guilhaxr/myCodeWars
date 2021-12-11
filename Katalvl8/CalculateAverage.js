// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    
    if( array.length === 0){
        return 0
    }
    
   let sum =  array.reduce((prev, curr)=>
    prev + curr
   )
   let result = sum / array.length
    return console.log(result)
  }

  find_average([1,1,1])