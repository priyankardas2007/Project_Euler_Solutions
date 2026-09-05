function pentagonNumbers() {
    function pentagonal(n) {
        return n * (3 * n - 1) / 2;
    }

    function isPentagonal(num) {
        const x = 24 * num + 1;
        const root = Math.sqrt(x);

        return Number.isInteger(root);
    }

    const pentagonalNumbers = new Set();

    // Generate enough pentagonal numbers
    for (let n = 1; n <= 10000; n++) {
        pentagonalNumbers.add(pentagonal(n));
    }

    let smallestDifference = Infinity;

    for (let k = 2; k <= 10000; k++) {
        const pk = pentagonal(k);

        for (let j = k - 1; j >= 1; j--) {
            const pj = pentagonal(j);

            const difference = pk - pj;

            // We only need smaller differences
            if (difference >= smallestDifference) {
                break;
            }

            // Both sum and difference must be pentagonal
            if (
                pentagonalNumbers.has(difference) &&
                pentagonalNumbers.has(pk + pj)
            ) {
                smallestDifference = difference;
            }
        }
    }

    return smallestDifference;
}
