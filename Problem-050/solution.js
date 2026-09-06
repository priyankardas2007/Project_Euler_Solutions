function consecutivePrimeSum(limit) {

    const isPrime = new Array(limit).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i < limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < limit; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];

    for (let i = 2; i < limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }


    const prefix = [0];

    for (let i = 0; i < primes.length; i++) {
        prefix.push(prefix[i] + primes[i]);
    }

    let maxLength = 0;
    let answer = 0;


    for (let start = 0; start < primes.length; start++) {

        for (
            let end = start + maxLength + 1;
            end <= primes.length;
            end++
        ) {

            const sum = prefix[end] - prefix[start];

            if (sum >= limit) {
                break;
            }

            if (isPrime[sum]) {
                maxLength = end - start;
                answer = sum;
            }
        }
    }

    return answer;
}


console.log(consecutivePrimeSum(1000000));
