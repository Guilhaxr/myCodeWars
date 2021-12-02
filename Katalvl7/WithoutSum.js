// For this kata you will have to forget how to add two numbers.

// In simple terms, our method does not like the principle of carrying over numbers
//  and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
    let result= [];
    let newArr1= num1.toString().split("").map(Number).reverse();
    let newArr2= num2.toString().split("").map(Number).reverse();

    for(let i = 0; i < Math.max(newArr1.length, newArr2.length); i++){
       result.push((newArr1[i] || 0 ) + (newArr2[i] || 0))
    }
    return console.log(Number(result.reverse().join("")))

    // let result = newArr1.map((e, i)=> (e || 0) + (newArr2[i] || 0) )
    // console.log(result)
    // return console.log(Number(result.reverse().join("")))
  }

  add(1236, 30977)

//   214