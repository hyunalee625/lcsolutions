function implementStr(haystack, needle) {
    if (needle.length === 0) return 0;

    if (needle && haystack.includes(needle)) {
        let haystackArr = haystack.split(needle)
        return haystackArr[0].length;
    }

    if(!haystack.includes(needle)) return -1;
}

console.log(implementStr("hello", "ll"))