funtion addBinary(a, b) {
    let aReverse = a.split("").reverse().map(Number);
    let bReverse = b.split("").reverse().map(Number);
    let rest = 0;
    let j = 0;
    let res = [];

    while (j < a.length || j < b.length) {
        let aNum = aRev[j] || 0;
        let bNum = bRev[j] || 0;
        sum = aNum + bNum + rest;

        if (sum === 3) {
            res.push(1);
            rest = 1
        } else if (sum === 2) {
        res.push(0);
        rest = 1;
        } else {
            res.push(sum);
            rest = 0
        }
    }

    j++;
}