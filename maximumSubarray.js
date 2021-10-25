function maximumSubarray(nums) {
    let maxSum = nums[0]

    for (let i = 1; i < nums.length; i++) {     // start from 1 because maxSum is nums[0]
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        maxSum = Math.max(maxSum, nums[i]);
    }

    return maxSum;
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))