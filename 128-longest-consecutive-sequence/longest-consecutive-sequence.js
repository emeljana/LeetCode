/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    let sortedNums = nums.sort((a,b)=>a-b)

    console.log(sortedNums)

    let longestSequence = 1;
    let currentSequence = 1;
    if( sortedNums.length == 0 ){
        return 0;

    }

    if (sortedNums.length == 1 ){
        return 1;
    }

    for(let i=1; i<sortedNums.length;i++){
        if(sortedNums[i] != sortedNums[i-1]){
            
        if (sortedNums[i] == sortedNums[i-1]+1){
            currentSequence++;
        } else {
            currentSequence = 1;
        }

        if(currentSequence >= longestSequence){
                longestSequence = currentSequence;
            }
        }
    }

    return longestSequence;
    
};