function removeElement(nums, val) {
    let rightIdx = nums.length - 1;
    let rightVal;

    for (let i = nums.length - 1; i > -1; i--) {
        const ele = nums[i];

        if (ele === val) {
            if (rightVal !== undefined) {
                nums[i] = rightVal;
                nums[rightVal] = '_';
            } else {
                nums[i] = '_';
                rightIdx--;
            }
        } else if (rightVal == undefined) {
            rightVal = element;
        }
    }

    return rightIdx + 1;
}

console.log(removeElement([3, 2, 2, 3], 3))