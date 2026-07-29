function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function primeSummation(limit) {
    let sum = 0;

    for (let i = 2; i < limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}
