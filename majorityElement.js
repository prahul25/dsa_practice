// https://leetcode.com/problems/majority-element


var majorityElement = function(input) {
    let count = 0, candidate = null;

    for (let num of input) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

console.log(majorityElement([2,2,1,1,1,2,2]))