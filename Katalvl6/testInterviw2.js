function solution(T, R) {
    let result = 0;
    let groups = T.toString().split(" ");
    let finalResult = [];
    
    
    for(let i = 0; i < groups.length; i++ ){
       let sortedGroup = groups[i].split("").sort();
       let newIndex = Number(sortedGroup[0] - 1 )
       finalResult[newIndex] = groups[i]
   
    }
    
}

console.group(solution(['codility1', 'codility3', 'codility2', 'codility4b', 'codility4a'],
         ['Wrong answer', 'OK', 'OK', 'Time limit exceeded', 'OK']))
