function goldbachsOtherConjecture() {

    let n = 9;

    while (true) {

        if (!prime(n)) {

            let k = false;

            for (let p = 2; p < n; p++) {

                if (prime(p)) {

                    let temp = n - p;

                    if (
                        temp % 2 === 0 &&
                        Number.isInteger(Math.sqrt(temp / 2))
                    ) {
                        k = true;
                        break;
                    }
                }
            }

            if (!k) {
                return n;
            }
        }

        n += 2;
    }
}


function prime(n) {

    if (n < 2) return false;

    for (let i = 2; i * i <= n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


console.log(goldbachsOtherConjecture());
