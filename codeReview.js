
// Given a set of numbers, return the additive inverse of each.
//  Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


//  invertNumber = (values) => {
//     const newArr = values.map(numbers =>  numbers * -1);

//     console.log(newArr)
   
    
//  }

// invertNumber([1,-2,3,-4,5])


// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre,
//  purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres,
//   up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents.
//    Return the toal cost rounded to 2 decimal places. Also you can guess that
//     there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

// function totalCost (litres, pricePerLitre) {
   

//     if (litres >= 10) {
//        let a = (litres * pricePerLitre) - (0.25 * litres)
//       return a = Math.abs(Number(a).toFixed(2))
//     } else if ( litres >= 8){
//         let b = (litres * pricePerLitre) - (0.20 * litres)
//         return b = Math.abs(Number(b).toFixed(2))
//     } else if ( litres >= 6){
//        let c =  (litres * pricePerLitre) - (0.15 * litres)
//        return c = Math.abs(Number(c).toFixed(2))
//     } else if (litres >= 4){
//         let d = (litres * pricePerLitre) - (0.10 * litres)
//         return d = Math.abs(Number(d).toFixed(2))
//     } else if (litres >= 2) {
//       let e =  (litres * pricePerLitre) - (0.5 * litres)
//       return e = Math.abs(Number(e).toFixed(2))
//     } else {
//         let f = (litres * pricePerLitre) - (litres)
//         return f = Math.abs(Number(f).toFixed(2))
//     }

// }
   
    
// totalCost(8, 2.5)

// let i = 96.19999999999999;
// i = i.toFixed(1);
// console.log(i)




//Evaluate these:
//#1
// [2] === [2] 
// {} === {} 

//#2 what is the value of property a for each object.
// const object1 = { a: 5 }; 
// const object2 = object1;  ----->   { a: 5 }
// const object3 = object2; ------->  { a: 5 }
// const object4 = { a: 5}; 
// object1.a = 4;  -----> { a: 4}


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

// class Animal {
//     constructor( name, type, color){
//         this.name = name;
//         this.type = type;
//         this.color = color;
        
//     }
// }


// class Mamal extends Animal {
//     constructor(name, type, color){
//         super(name, type, color)
//     }
//     sound(){
//         console.log(`${this.name} I'm the big cow`);
//     }
// }

// const Cow = new Mamal('Zara', 'Leiteira', 'white')



// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// function getCount(str) {
//     let vowelsCount = 0;

//     const newArr = str.split("")
   
//     for(let i = 0; i < newArr.length; i++){
//         if(
//         newArr[i]  === 'a' ||
//         newArr[i]  === "e" ||
//         newArr[i]  === "i" ||
//         newArr[i]  === 'o' ||
//         newArr[i]  === 'u' 
//         ){
//             vowelsCount++;
//         }
//     }
//     return console.log(vowelsCount);
//   }


//   getCount("abracayoueideabra")




// You are going to be given a word. Your job is to return the middle character of the word.
//  If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 
//     in some test cases due to an error in the test cases). You do not need to test for this.
//      This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// function getMiddle(string){   
//    const str = string.length;
//    let finalResult = "";

//    if(str % 2 === 0){
//        const calculate = str / 2;
//        const secondCalculate = Math.round((str + 1 )/ 2);
//        finalResult  = string.charAt(calculate - 1) + string.charAt(secondCalculate - 1)
//        return console.log(finalResult)
//    } else {
//         const calculate = Math.round((str + 1) / 2)
//        finalResult = string.charAt(calculate -1 )
//        return console.log(finalResult)
//    }
   
// }

// getMiddle('Vit')


// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// // it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// // when you do:
// console.log(startLine);
// console.log(turtle.padStart(8));
// console.log(rabbit.padStart(8));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, '');

// console.log(turtle)
// // #3) Get the below object to go from:
// let obj = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// // to this:
// 'my name is Rudolf the raindeer'
            

// // Object.entries(obj).forEach(value =>{
// //     let str =  value.toString();
// //     return  console.log(str)
// // })

// Object.entries(obj).map(value=>
//     console.log(value.join(" ")))


// const userProfile = [["G", 12], ["L", 56], ["R", 34]];

// const obj = Object.fromEntries(userProfile);

// console.log(obj)
// c
// userProfile.join()

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1],[2],[3],[[[4]]],[[[5]]]]

// const newArr = array.flat(3);
// console.log(newArr)



// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

// const new2Array = greeting.flat()
// console.log(new2Array)


// //#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// const str = new2Array.join(" ")
// console.log(str)
// //#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// const new3Array = trapped.flat(25)
// console.log(new3Array)

// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
// const new4Array = userEmail3.trim()
// console.log(new4Array)



// // //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const new5Array = Object.entries(users)
// // console.log(new5Array)

// //#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const multiplication = new5Array.map(value => [ value[0], value[1] * 2])
// console.log(multiplication)

// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// const final = Object.fromEntries(multiplication)
// console.log(final)

// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 1000
// }

// //1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// //2
// basket.forEach(item => {
//   console.log(item);
// })

// for (item in detailedBasket) {
//   console.log(item);
// }

// for (item of basket) {
//   console.log(item);
// }

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
// const array1 = [-1,0,3,100, 99, 2, 99] // should return 100
// const array2 = ['a', 3, 4, 2] // should return 4
// const array3 = [] // should return 0

// function biggestNumberInArray(array) {
//     let counter = 0;
//    for( let i = 0; i < array.length; i++){
//        if(counter < array[i])
//        console.log(counter = array[i] )
//    }
// }


// biggestNumberInArray(array2)

// function biggestNumberInArray2(arr) {

// }

// function biggestNumberInArray3(arr) {

// }


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
// amazonBasket = {
//   glasses: 1,
//   books: 2,
//   floss: 100
// }

// function checkBasket(basket, lookingFor) {

// }


// const promise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("success");
//   }, 4000)
// })

// promise.then((result)=>{
//   console.log(result)
// })
// .catch((err)=>{
//   console.log(err)
// })


// const urls = [
//   'http://swapi.dev/api/people/1',
//   'http://swapi.dev/api/people/2',
//   'http://swapi.dev/api/people/3',
//   'http://swapi.dev/api/people/4'
// ]

// Promise.all(urls.map(url=>{
//   return fetch(url)
//     .then(resp=>resp.json())
// }))
// .then((results)=>{
//   console.log(results[0])
//   console.log(results[1])
//   console.log(results[2])
//   console.log(results[3])

// })
// .catch((err)=>{
//   console.log("Error")
// })


fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);


  const exercice1 = async() =>{
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/")
      const data = await response .json();
      console.log(data)
    } catch (err) {
      console.log("oppps", err)
    }
  
  }


  // #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];


const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map( async(url) => {
        const response = await fetch(url)
        return response.json()

      })
    );
  
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);

  } catch (error) {
    console.log("opps",)
  }
}
