function sumOfDivisors(n) {
    let sum = 1;

    if (n === 1) {
        return 0;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;

            if (i !== n / i) {
                sum += n / i;
            }
        }
    }

    return sum;
}


function sumOfNonAbundantNumbers(n) {
    let abundantNumbers = [];

    for (let i = 1; i <= n; i++) {
        if (sumOfDivisors(i) > i) {
            abundantNumbers.push(i);
        }
    }

    // Track numbers that can be expressed
    // as the sum of two abundant numbers
    let abundantSums = new Array(n + 1).fill(false);

    for (let i = 0; i < abundantNumbers.length; i++) {

        for (let j = i; j < abundantNumbers.length; j++) {

            let sum = abundantNumbers[i] + abundantNumbers[j];

            if (sum > n) {
                break;
            }

            abundantSums[sum] = true;
        }
    }

    // Add numbers that cannot be expressed
    // as the sum of two abundant numbers
    let total = 0;

    for (let i = 1; i <= n; i++) {
        if (!abundantSums[i]) {
            total += i;
        }
    }

    return total;
}
