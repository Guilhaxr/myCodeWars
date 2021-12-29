function solution(A, B) {
    let result =0;
    let cardsAlec = A.split("");
    let cardsBob = B.split("");

    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    for(let i = 0; i < cardsAlec.length; i++ ){
     AlecIndex = cards.indexOf(cardsAlec[i])
     BobIndex = cards.indexOf(cardsBob[i])
     if(AlecIndex > BobIndex){
        result++
     }  
    }
    return result
}

console.log(solution('23A84Q', 'K2Q25J'))