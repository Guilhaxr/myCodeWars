
// You will be given an array of numbers. 
// You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortArray = (array) =>{
    let oddNumbers = [];
    let finalResult =[];

    //Here I cloned the array;
    let insert = array.slice(0);

    
    //here I filter the even numbers, this will return the odds;
    array =  array.filter((e)=>{
      return  e % 2 !== 0
    })

    //sorting the odds numbers;
    array.sort()
//    for( let i = 0; i < insert.length; i++){
//        if( insert[i] % 2 === 0 ){
//            array.slice(insert[i], 0, array)
//        }
//    }
    // Finnaly,  I iterated the the cloned array
    //  and I created a condtition where the even numbers were replaced in original array
    insert.forEach((element, index)=>{
        if(element % 2 === 0 ){
           return array.splice(index, 0 , element)
        }
    })
   
    return array
}

console.log((sortArray([ -17, 14, 30, -23, -2, -43, -45, -49, 1, 30, -22, 26, 16, 21, 6, 37 ])))