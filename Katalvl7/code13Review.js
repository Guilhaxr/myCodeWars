// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(str) {
   let  newArr =[];
    strArr= str.split("");
    
    
    for(let i = 0; i < strArr.length; i++){
        newArr.push( strArr[i].toLowerCase().repeat(i + 1))
        console.log(newArr)
    }

    let final = newArr.map((e)=>e.charAt(0).toUpperCase() + e.substring(1))
    console.log(final)
    return  console.log(final.join('-'))
       
      
}

accum("NyffsGeyylB")