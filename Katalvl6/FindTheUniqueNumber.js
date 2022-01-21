// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let myArr = arr.sort();
    let result = {};
    let uniqNumber = [];

    for(let i = 0; i < myArr.length; i++){
        result[myArr[i]] = (result[myArr[i]] || 0) + 1;
    
    }

    const counter = Object.keys(result);


    for( let prop  in counter){
        if(result[counter[prop]] === 1){
            uniqNumber.push(counter[prop])
        }
    }
  
  let finalResult =  uniqNumber.toString();

  return Number(finalResult)

  }

  console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))

//top Solution !
//   function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
//   }