// must write in O(log n) runtime
function searchInsertPos(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) return middle;
        else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return left;
}

console.log(searchInsertPos([1, 3, 5, 6], 5))
