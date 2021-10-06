var twoSum = function(nums, target) {
    pairs = [];

    for (i = 0; i < nums.length - 1; i++) {
        for (j = i; j < nums.length - 1; j++) {
            if (nums[i] + nums[j] === target) {
                pairs.push([i, j])
            }
        }
    }

    return pairs;
}

console.log(twoSum([2, 7, 11, 15], 9))