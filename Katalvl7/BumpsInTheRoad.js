// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely.
//  15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x){
let counter = 0;
let newArr = x.split("")

for(let i = 0; i < newArr.length; i++){
    if(  newArr[i] === "n"  ){
        counter++
    }
}

if(counter <= 15){
    return console.log("Woohoo!")
}else{
    return console.log("Car Dead")
}
}

bump("_nnnnn")