function primePermutations() {

    function isPrime(n) {
        if (n < 2) return false;

        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }


    function arePermutations(a, b, c) {
        const x = a.toString().split('').sort().join('');
        const y = b.toString().split('').sort().join('');
        const z = c.toString().split('').sort().join('');

        return x === y && y === z;
    }


    for (let a = 1000; a < 10000; a++) {

        if (!isPrime(a)) continue;

        for (let b = a + 1; b < 10000; b++) {

            if (!isPrime(b)) continue;

            let difference = b - a;
            let c = b + difference;

            if (c >= 10000) break;

            if (
                isPrime(c) &&
                arePermutations(a, b, c)
            ) {

                // Skip the example given in the question
                if (a === 1487) continue;

                return Number(
                    a.toString() +
                    b.toString() +
                    c.toString()
                );
            }
        }
    }
}


console.log(primePermutations());
