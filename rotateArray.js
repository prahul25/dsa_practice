// https://leetcode.com/problems/rotate-array/description


// simple approach but Time Complexity: O(n⋅k) because for each of the k steps, all elements are shifted, making this approach less efficient for large arrays or large k.

// const rotate = (nums,k) => {
//     k = k % nums.length;

//     for(let i = 0; i < k; i++){
//         nums.unshift(nums.pop())
//     }
//     return nums
// }

console.log(rotate([1,2,3,4,5,6],3))

// another approach

function rotate(nums, k) {
    let n = nums.length;
    k = k % n; // Handle cases where k > n

    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
    return nums
};

function reverse(arr, start, end) {
    while (start < end) {
        // Swap elements
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};