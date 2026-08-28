function truncatablePrimes(n) {
    let total = 0;
    let found = 0;
    let num = 11; // Single-digit primes are excluded

    while (found < n) {
        if (isTruncatablePrime(num)) {
            total += num;
            found++;
        }

        num++;
    }

    return total;
}


function isTruncatablePrime(num) {
    let str = num.toString();


    for (let i = 0; i < str.length; i++) {
        if (!isPrime(Number(str.slice(i)))) {
            return false;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (!isPrime(Number(str.slice(0, str.length - i)))) {
            return false;
        }
    }

    return true;
}


function isPrime(p) {
    if (p < 2) return false;

    for (let i = 2; i * i <= p; i++) {
        if (p % i === 0) return false;
    }

    return true;
}



truncatablePrimes(11);
