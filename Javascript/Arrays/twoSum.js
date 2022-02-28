
/**
 * 
 * @param {} nums array 
 * @param {*} target number
 * @returns array of indices
 */
 var twoSum = function(nums, target) {
    let map = {}
    let index_map = {}
    let res = []
    for (let i = 0;i < nums.length; i++) {
        // if nums[i] exists in map then return indices of map and array
        if(nums[i] === map[target - nums[i]]) {
          res.push(index_map[target - nums[i]])
           res.push(i);
          
        }  // else add target - nums[i] in map
        else {
             map[nums[i]] = target - nums[i];
            index_map[nums[i]] = i;
        }
    }
    return res;
    
};