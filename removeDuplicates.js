// https://leetcode.com/problems/remove-duplicates-from-sorted-array


var removeDuplicates = function(nums) {
    let uniqueEle = 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[uniqueEle]){
            uniqueEle++;
            nums[uniqueEle] = nums[i]
        }
    }
    return uniqueEle + 1
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))