var twoSum = function(nums, target) {

let answers = [];
    for(let i = 0; i < nums.length-1; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i]+nums[j] == target){
                if(i == j){
                    continue;
                }
                answers.push(i, j);
                return answers;
            }
        }
    }
    return answers;
}