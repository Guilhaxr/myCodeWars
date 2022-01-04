// Write a function, which takes a non-negative integer (seconds) 
// as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {;
    let sec = seconds;
    let min = 00;
    let hours = 00;
    
    let myTimeSec = 00;
    let myTimeMin = 00;
    let myTimeHours = 00;
    if ( (sec / 3600) % 1 !== 0 ){
        hours = sec / 3600
        console.log(hours)

        min  = (hours % 1) * 60
        console.log(min)

        sec = (min % 1 ) * 60
        console.log(sec)
        
        myTimeHours = Math.trunc(hours)
       
        if(myTimeHours < 99 && min > 1 ){
            if( (min % 1) > 0.99){
                myTimeMin = Math.round(min);

            }else{
                myTimeMin = Math.trunc(min);
            }

            if(myTimeMin >= 60){
                myTimeMin = 0;
            }

        }else{
            myTimeMin = Math.trunc(min);
        }
        // console.log(myTimeMin)

        if(myTimeMin <= 59 && sec > 1 ){
            if((sec % 1) > 0.99){
                myTimeSec = Math.round(sec)
            }else{
                myTimeSec = Math.trunc(sec)
            }
        }
        
        if(myTimeSec >= 60){
            myTimeSec = 0;
        }
    }

    if( (sec / 3600) % 1 === 0 ){
        hours = sec / 3600;
        myTimeHours = hours;
    }

    let formatedHours = ("0" + myTimeHours).slice(-2);
    let formatedMins = ("0" + myTimeMin).slice(-2);
    let formatedSec = ("0" + myTimeSec).slice(-2);
    
   let result = `${formatedHours}:${formatedMins}:${formatedSec}`
   return result
  }

  console.log(humanReadable(59))