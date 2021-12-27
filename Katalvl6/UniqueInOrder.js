// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements
//  with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (iterable) =>{
    let newArr ;
    if( typeof(iterable) ===  "object"){
        newArr = iterable;
    }else{
        newArr = iterable.split("");
    }

    let result = [];
    let indexCount = 0;

    for( let i = 0; i < newArr.length;){
        if( newArr[i] === newArr[i + 1] ){
            newArr.splice(newArr[i], 1)
        }

        if( newArr[i] !== newArr[i + 1]){
            result.push(newArr[i]);
            i++;
        }
    }
    
    return result
}

console.log(uniqueInOrder('ABBCcAD'))


// top solution
// function uniqueInOrder(it) {
//     var result = []
//     var last
    
//     for (var i = 0; i < it.length; i++) {
//       if (it[i] !== last) {
//         result.push(last = it[i])
//       }
//     }
    
//     return result
//   }

