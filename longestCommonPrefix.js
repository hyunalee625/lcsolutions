function longestCommonPrefix(strs) {
    let result = strs[0];

    for (let i = 1; i < strs.length; i++) {
        const ele = strs[i];
        while (!ele.startsWith(result)) {
            result = result.substring(0, result.length - 1)
        }
        if (result = "") break;
    }

    return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))