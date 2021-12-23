
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript


// https://www.codewars.com/kata/5853213063adbd1b9b0000be

const fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

const position = [0,0]

const moves = ['up', 'left', 'right', 'left', 'left'];



function streetFighterSelection(fighters, position, moves) {
   let result = [];
   
   for (let i = 0; i < moves.length; i++){
     if(moves[i]==="up" && position[0]===1) {
        position[0]--
     }
    //  if(moves[i]==="up" && position[0]===0) {
    //     position[0]
    //  } 
     if(moves[i]==="right") {
        if(position[1]===5) {
            position[1]=0
        } else {
            position[1]++
        }
     }
    if(moves[i]==="left") {
        if(position[1]===0) {
            position[1]=5
        } else {
            position[1]--
        }
    }
    if(moves[i]==="down" && position[0]===0) {
        position[0]++
    } 
    result.push(fighters[position[0]][position[1]])
   }    
    return result;
  }



  console.log(streetFighterSelection(fighters, position, moves))