// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(str) {
	
    const myArr = str.split('')
    let newArray = [];


    for(let i = 0; i < myArr.length; i++){
       newArray.push(myArr[i].toLowerCase().repeat(i + 1))
       console.log(newArray)
      

    }
    let final = newArray.map((e)=> e[0].toUpperCase() + e.substring(1))
   return console.log(final.join('-'))

}


accum("ZpglnRxqenU");

// var string = 'exemplo'
// let string2 = string.substring(string.length - 4)
// console.log (string2) 

    // const final = myArr.map((word) => word[0].toUpperCase() + word.substring(1));
    // const letters  =

    // const g = final.join('-')
    // console.log(g.indexOf("Q"))
    // console.log(g)
    // for(let i = 0; i < g.lenght; i++){
    //     console.log(final)
    //        if (g[i] === g[0] ){
    //           console.log(final[i].repeat(4))
    //         }
    // }



// accum("rqaEzty");