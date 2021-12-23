
// In this kata you will have to write a function that takes litres and pricePerLitre as arguments.
// Purchases of 2 or more litres get a discount of 5 cents per litre, 
// purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres,
// up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents.
// Return the toal cost rounded to 2 decimal places.
// Also you can guess that there will not be negative or non-numeric inputs.





function fuelPrice(litres, pricePerLitre) {
    // your code here
    // Good luck with it!
    if (litres >= 2 && litres <= 3.99) {
        return Math.abs(Number(pricePerLitre - 0.05).toFixed(2))
    } else if ( litres >= 4 &&  litres <= 5.99 ) {
        return Math.abs(Number(pricePerLitre - 0.10).toFixed(2))
    } else if ( litres >= 6 && litres <= 7.99){
        return Math.abs(Number(pricePerLitre - 0.15).toFixed(2))
    } else if ( litres >= 8 && litres <= 9.99) {
        return Math.abs(Number(pricePerLitre - 0.20).toFixed(2))
    } else if ( litres >= 12) {
        return Math.abs(Number(pricePerLitre - 0.25).toFixed(2))
    } else {
        return Math.abs(Number(pricePerLitre).toFixed(2))
    }


}



console.log(fuelPrice(2, 11.55555555555555))


