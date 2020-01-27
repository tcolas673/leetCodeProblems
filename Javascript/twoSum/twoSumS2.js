var twoSum = function(nums, target) {
    let answers = [];
    let obj = {};
    
    for(let i = 0; i < nums.length; i++){
        let potentialSum = target - nums[i];
        if(potentialSum in obj){
            answers.push(i,obj[potentialSum])
            return answers;
        } else {
            obj[nums[i]] = i;
        }
    }
};