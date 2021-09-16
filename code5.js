
// Note that an array of 1 integer is automatically considered to be sorted in ascending order since
//  all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed 
//  the right integer in value. An empty list is considered a degenerate case and therefore will not 
//  be tested in this Kata - feel free to raise an Issue if you see such a list being tested.


function inAscOrder(arr) {
    

  
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) 
            return  false    
    } 
    return true
} 
    
    

  
  
console.log(inAscOrder([1,2,8,4,5]))

// const index = g.indexOf(1)

// console.log(index)
