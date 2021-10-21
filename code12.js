




// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// const sortPhrase = (str) => {
//     let newArray=[]
//     let result = str.split(' ')

//     for(let i=0; i<result.length; i++){
//         const sortResult  = result[i].split("").sort();

//         newArray[parseInt(sortResult[0])-1] = result[i]
//     }
    
//     return newArray.join(' ')
// }

// console.log(sortPhrase("4of Fo1r pe6ople g3ood th5e the2"))



const sortPhrase = (str)=>{
    const dividedArr = str.split(' ')
    const final = []
    console.log(dividedArr)
  
    dividedArr.forEach((word)=>{
      const sortedWord = word.split('').sort()
      sortedWord
  
  
      const newIndex = Number(sortedWord[0] - 1)
      console.log(newIndex)
      final[newIndex] = word
      console.log(final[newIndex])
    })
  
    return final.join(' ')
  }
  
  
  console.log(sortPhrase("4of Fo1r pe6ople g3ood th5e the2"))
  
  // CODE WARS LINK
  // https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript