var combinationSum = function(candidates, target) {
    let combos = [];

    dfsTraversal(candidates, 0, target, [], combos);

    return combos;
}

const dfsTraversal = (candidates, startIdx, remaining, currentPath, output) => {
    if (remaining === 0) {
        output.push(currentPath.slice());
    }

    for (let i = startIdx; i < candidates.length; i++) {
        if (remaining - candidates[i] >= 0) {
            currentPath.push(candidates[i]);

            dfsTraversal(candidates, i, remaining - candidates[i], currentPath, output);

            currentPath.pop();
        }
    }
}

// candidate numbers can be repeated unlimited number of times
// use DFS to try all possible combos
// need a 'start index' to avoid duplicate combos

console.log(combinationSum([2, 3, 6, 7], 7))