// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN (pin) {
    const validate1 =  /^[0-9]{6}$/gi;
    const validate2 =  /^[0-9]{4}$/gi;
    if (validate1.test(pin) || validate2.test(pin) ){
        return console.log(true)
    } else {
        return console.log(false)
    }
  }


validatePIN("7653275")