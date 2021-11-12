var letterCombo = function(digits) {
    const numLetter = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };


    if (digits === "") return [];   // base
    let combos = [];

    for (let i = digits.length - 1; i >= 0; i--) {
        const num = digits[i];
        if (combos.length === 0) {
            combos = [...numLetter[num]];
        } else {
            const newCombo = [];
            for (let j of numLetter[num]) {
                for (let k of combos) {
                    newCombo.push(j + k);
                }
            }

            combos = newCombo;
        }
    }

    return combos;
}

// digits range ['2', '9']

console.log(letterCombo("23"))