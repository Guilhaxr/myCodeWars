const axios = require("axios");
// Task
// Write a program that prints the numbers from 1 to 33.

// For any multiples of three print "🦌" (or :buck:) instead of the number.
// For any multiples of five print "⚡" (or :fast:) instead of the number.
// For any multiples of three and five print "🦌⚡" (or :buck::fast:).
// If none of the above conditions are met, just print out the number.


const calculator = (n) => {
    let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21, 22,23,24,25,26,27,28,29,30,31,32,33];
    console.log(n.series)
    for ( let i = 0; i < n.series.length; i++){
        if( n.series[i] % 5 ===0 && n.series[i] % 3 === 0 ){
            console.log("🦌⚡")
        } else if ( n.series[i] % 3 === 0 ){
            console.log("🦌")
        }else if( n.series[i] % 5 ===0 ){
            console.log("⚡")
        } else {
            console.log(n.series[i])
        }

        
    }

}

let url = "https://tests.radically.digital/json/buckfast/buckfast-version-2-simple.json";
    axios.get(url)
    .then((res)=>{
        // console.log(res.data)
        console.log(calculator(res.data))
    })
    .catch((err)=>{
        console.log(error)
    })
    