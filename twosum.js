// Given an array of numbers and a target number, 
// find two elements in the array that match the target and return their indices. 


var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        const remainder = target - nums[i];
        if (map.has(remainder)){
            return [i, map.get(remainder)];
        }
        map.set(nums[i], i);
    }
 
}