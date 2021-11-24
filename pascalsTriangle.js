function pascalsTriangle() {
    const arr = [];
    let prevRow;

    for (let i = 1; i <= numRows; i++) {
        const row = new Array(i).fill(1);

        if (prevRow) {
            for (let j = 1; j < prevRow.length; j++) {
                const cs = prevRow[j] + prevRow[j - 1];
                row[j] = cs;
            }
        }

        arr.push(row);
        prevRow = row;
    }

    return arr;
}

