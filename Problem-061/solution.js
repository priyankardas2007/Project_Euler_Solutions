function cyclicalFigurateNums(n) {

    const formulas = {
        3: x => x * (x + 1) / 2,
        4: x => x * x,
        5: x => x * (3 * x - 1) / 2,
        6: x => x * (2 * x - 1),
        7: x => x * (5 * x - 3) / 2,
        8: x => x * (3 * x - 2)
    };
    const numbers = {};

    for (let type = 3; type <= n + 2; type++) {

        numbers[type] = [];

        for (let x = 1; ; x++) {

            const value = formulas[type](x);

            if (value >= 10000) {
                break;
            }
            if (value >= 1000 && value % 100 >= 10) {
                numbers[type].push(value);
            }
        }
    }


    const prefixMap = new Map();

    for (let type = 3; type <= n + 2; type++) {

        for (const value of numbers[type]) {

            const prefix = Math.floor(value / 100);

            if (!prefixMap.has(prefix)) {
                prefixMap.set(prefix, []);
            }

            prefixMap.get(prefix).push({
                value: value,
                type: type
            });
        }
    }

    let total = 0;

    const found = new Set();

    function search(chain, usedTypes, usedNumbers) {

        if (chain.length === n) {
            const last = chain[chain.length - 1];
            const first = chain[0];

            if (last % 100 !== Math.floor(first / 100)) {
                return;
            }
            const key = [...chain].sort((a, b) => a - b).join(",");

            if (found.has(key)) {
                return;
            }

            found.add(key);

            let sum = 0;

            for (const value of chain) {
                sum += value;
            }

            total += sum;

            return;
        }

        const last = chain[chain.length - 1];

        const suffix = last % 100;

        const candidates = prefixMap.get(suffix);

        if (!candidates) {
            return;
        }

        for (const candidate of candidates) {
            if (usedTypes.has(candidate.type)) {
                continue;
            }

            if (usedNumbers.has(candidate.value)) {
                continue;
            }

            usedTypes.add(candidate.type);
            usedNumbers.add(candidate.value);
            chain.push(candidate.value);

            search(
                chain,
                usedTypes,
                usedNumbers
            );

            chain.pop();
            usedTypes.delete(candidate.type);
            usedNumbers.delete(candidate.value);
        }
    }

    for (let type = 3; type <= n + 2; type++) {

        for (const value of numbers[type]) {

            search(
                [value],
                new Set([type]),
                new Set([value])
            );
        }
    }

    return total;
}
