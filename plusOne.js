function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshit(1);
            return digits;
        }
    }
};

console.log(plusOne([1, 2, 3]))