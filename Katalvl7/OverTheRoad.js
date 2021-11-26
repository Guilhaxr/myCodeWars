
// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road.
//  Naturally, you would like to find out the house number of the people on the other side of the street.
//   The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
// Evens increase on the right; odds decrease on the left.
//  House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example (address, n --> output)
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// 1, 3 --> 6
// 3, 3 --> 4
// 2, 3 --> 5
// 3, 5 --> 8

function overTheRoad(address, n){
  let newArr = [];
  let evenArr = [];
  let oddArr = [];
  let indexAdress = 0;

  
 
  for(let i = 1; i <= n + n; i++){
    newArr.push(i)
  }
  
    newArr.filter((e)=> {
      if( e % 2 === 0){
        evenArr.push(e)
      }else {
        oddArr.push(e)
    }
  })

  oddArr.sort((a, b)=> b-a)

  
    if(address % 2 === 0 ){
      indexAdress = evenArr.indexOf(address);
      return console.log(oddArr[indexAdress]);
    }else {
      indexAdress = oddArr.indexOf(address);
      return console.log(evenArr[indexAdress])
    }
  
  }

  overTheRoad(3,5)

  //1,2,3,4,5,6,7,8,9