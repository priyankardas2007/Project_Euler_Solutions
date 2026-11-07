
function cubicPermutations(n) {
    let groups = new Map();
    let i = 1;

    while (true) {
        let cube = BigInt(i) ** 3n;
        let sign = cube.toString().split('').sort().join('');

        if (!groups.has(sign)) {
            groups.set(sign, []);
        }

        groups.get(sign).push(cube);

        let nextcube = BigInt(i + 1) ** 3n;

        if (nextcube.toString().length !== cube.toString().length) {
            for (let values of groups.values()) {
                if (values.length === n) {
                    return Number(values[0]);
                }
            }

            groups.clear();
        }

        i++;
    }
}

cubicPermutations(2);
