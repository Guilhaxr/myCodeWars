




 function permute(nums) {
    let result = [];

    if( nums.length === 0){
      return []
    }

    if(nums.length === 1){
      return [nums]
    }

    for(let i = 0; i < nums.length; i++){
      let currentNums = nums[i];
      let remainingNums =nums.slice(0, i).concat(nums.slice(i + 1))
        
      // console.log(remainingNums)
      
      let remainingNumsPermuted = permute(remainingNums);
      console.log(remainingNumsPermuted)

        // for (let j = 0; j < remainingNumsPermuted.length; j++) {
        //   let permutedArray = [currentNums].concat(remainingNumsPermuted[j])
        //   console.log(permutedArray)

        //   result.push(permutedArray)
        // }

    }

      return result
      
    
   }

   console.log(permute([1,2,3,]))