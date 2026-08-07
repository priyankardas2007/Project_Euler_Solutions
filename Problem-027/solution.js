function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function quadraticPrimes(n) {
      let bestA = 0;
    let bestB = 0;
    let maxLength = 0;

    for (let a = -n + 1; a < n; a++) {

        for (let b = -n; b <= n; b++) {

            let count = 0;

            while (true) {

                let value = count * count + a * count + b;

                if (!isPrime(value)) {
                    break;
                }

                count++;
            }

            if (count > maxLength) {
                maxLength = count;
                bestA = a;
                bestB = b;
            }
        }
    }

    return bestA * bestB;
}


quadraticPrimes(1000);
