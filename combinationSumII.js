var combinationSum2 = function(candidates, target) {
    if (!candidates || candidates.length == 0) return [];

    let combos = [];
    candidates.sort((a, b) => a - b);

    var helperfunc = function(curSum, cur, idx) {
        if (curSum == target) {
            combos.push([...cur])
            return
        }

        for (let i = idx; i< candidates.length; i++) {
            if (i != idx && candidates[i] == candidates[i - 1]) continue;
            if (curSum > target) return;
            cur.push(candidates[i]);
            helperfunc(curSum + candidates[i], cur, i + 1);
            cur.pop()
        }
    }

    helperfunc(0, [], 0);
    return combos;
};

console.log(combinationSum2([10,1, 2, 7, 6, 1, 5], 8))