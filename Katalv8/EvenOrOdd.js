// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


function even_or_odd(number) {
  if(number % 2 === 0){
      return console.log("Even")
  }else{
      return console.log("Odd")
  }
}

even_or_odd(2)