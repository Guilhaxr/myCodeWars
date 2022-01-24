// You will be given an array of numbers. 
// You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortArray =(array) => {
    // I  filtered the odds numbers and sorted;
    let odd = array.filter((e)=> e % 2 )
    odd.sort((a, b)=> a - b);

    //Here I map the original array and every time i find a odd value,
    //I take the first element of my sorted array and put it in place of originala array
    let result = array.map((e)=>  
        e % 2 ? odd.shift() : e
    )
    return result
}

console.log((sortArray([ 1, 11, 2, 8, 3, 4, 5 ])))