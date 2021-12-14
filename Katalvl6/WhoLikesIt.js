// You probably know the "like" system from Facebook and other pages.
//  People can "like" blog posts, pictures or other items.
//   We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.
//  It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {

    let finalResult = "";

    if( names.length === 0){
        return "no one likes this"}

    for(let i = 0; i < names.length; i++){
        console.log(names.length)
        if( names[i] === ""){
            return "no one likes this"
        }else if( names.length === 1){
            finalResult = `${names[i]} likes this`
        }else if( names.length === 2){
            finalResult = `${names[0]} and ${names[1]} like this`
        }else if ( names.length === 3){
            finalResult =  `${names[0]}, ${names[1]} and ${names[2]} like this`
        }else if(names.length > 3){
           finalResult = `${names[0]}, ${names[1]} and ${i - 1} others like this`
        }
    }
    
    return  finalResult
  }

  console.log(likes(["Alex", "Jacob", "Mark", "Max", "g"]))