function circularPrimes(n) {
    let count = 0;

    for (let num = 2; num < n; num++) {
        let str = num.toString();
        let circular = true;
        for (let i = 0; i < str.length; i++) {
            let rotated = str.slice(i) + str.slice(0, i);

            if (!isPrime(Number(rotated))) {
                circular = false;
                break;
            }
        }
        if (circular) {
            count++;
        }
    }

    return count;
}


function isPrime(m) {
    if (m < 2) return false;

    for (let i = 2; i * i <= m; i++) {
        if (m % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(circularPrimes(1000000));
