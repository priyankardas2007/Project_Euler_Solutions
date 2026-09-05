function substringDivisibility(n) {
    const primes = [2, 3, 5, 7, 11, 13, 17];
    let total = 0;

    let digits = [];

    for (let i = 0; i <= n; i++) {
        digits.push(i);
    }

    function search(current, used) {
        let pos = current.length;
        if (pos >= 4) {
            let number =
                current[pos - 3] * 100 +
                current[pos - 2] * 10 +
                current[pos - 1];

            let prime = primes[pos - 4];

            if (number % prime !== 0) {
                return;
            }
        }
        if (pos === n + 1) {
            total += Number(current.join(""));
            return;
        }

        for (let digit of digits) {
            if (used.has(digit)) {
                continue;
            }

            used.add(digit);
            current.push(digit);

            search(current, used);

            current.pop();
            used.delete(digit);
        }
    }

    search([], new Set());

    return total;
}
