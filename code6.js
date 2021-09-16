// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let word = Array.from(str)
    const filterLoweCase =  word
    console.log(word)
    var vowelsCount = 0;
        for ( let i = 0; i < word.length; i++ ) { 
          if ( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'o' || word[i] === 'u'  ){
            vowelsCount++; 
          } 
        }
    return console.log(vowelsCount);
  }

  getCount("oIPpiae")

  

  