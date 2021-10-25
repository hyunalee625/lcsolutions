function climbingStairs(num) {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    if (num === 2) return 2;
    return climbingStairs(n - 1) + climbingStairs(n - 2);
}

// recursive w/0 memoization

const def = { 0: 0, 1: 1, 2:2 }

function climbingStairs(num) {
    if (num === 1 ) return 1;
    if (num === 2 ) return 2;
    if (!def[num]) {
        def[num] = climbingStairs(num - 1) + climbingStairs(num - 2)
    }

    return def[n]
}

// recursive with memoization
// O(n) time and space