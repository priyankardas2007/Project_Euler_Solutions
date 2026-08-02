function sumOfDivisors(n) {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    return sum;
}

function sumAmicableNum(limit) {
    let total = 0;

    for (let a = 1; a < limit; a++) {

        let b = sumOfDivisors(a);

        if (b !== a && b < limit) {

            if (sumOfDivisors(b) === a) {
                total += a;
            }
        }
    }

    return total;
}

