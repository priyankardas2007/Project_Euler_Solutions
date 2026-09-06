function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {

    function countPrimeFactors(num) {
        let factors = 0;
        let divisor = 2;
        while (divisor * divisor <= num) {
            if (num % divisor === 0) {
                factors++;
                while (num % divisor === 0) {
                    num /= divisor;
                }
            }

            divisor++;
        }
        if (num > 1) {
            factors++;
        }

        return factors;
    }


    let consecutive = 0;
    let num = 2;

    while (true) {

        if (countPrimeFactors(num) === targetNumPrimes) {
            consecutive++;
        } else {
            consecutive = 0;
        }
        if (consecutive === targetConsecutive) {
            return num - targetConsecutive + 1;
        }

        num++;
    }
}


console.log(distinctPrimeFactors(4, 4));
