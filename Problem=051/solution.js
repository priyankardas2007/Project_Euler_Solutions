function primeDigitReplacements(n) {

    function isPrime(num) {
        if (num < 2) return false;

        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }

        return true;
    }

    for (let num = 11; ; num++) {

        if (!isPrime(num)) continue;

        let digits = num.toString();

        for (let digit = 0; digit <= 9; digit++) {

            let positions = [];

            for (let i = 0; i < digits.length; i++) {
                if (digits[i] === digit.toString()) {
                    positions.push(i);
                }
            }

            if (positions.length === 0) continue;

            let subsets = 1 << positions.length;

            for (let mask = 1; mask < subsets; mask++) {

                let primeCount = 0;

                for (let replacement = 0; replacement <= 9; replacement++) {

                    let newDigits = digits.split('');

                    for (let j = 0; j < positions.length; j++) {
                        if (mask & (1 << j)) {
                            newDigits[positions[j]] =
                                replacement.toString();
                        }
                    }

                    if (newDigits[0] === '0') continue;

                    let newNumber = Number(newDigits.join(''));

                    if (isPrime(newNumber)) {
                        primeCount++;
                    }
                }

                if (primeCount === n) {
                    return num;
                }
            }
        }
    }
}


console.log(primeDigitReplacements(8));
