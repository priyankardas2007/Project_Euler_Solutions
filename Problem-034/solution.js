function digitFactorial() {
    let total = 0;
    let numbers = [];

    for (let num = 10; num <= 7 * fac(9); num++) {
        let sum = 0;
        for (let digit of num.toString()) {
            sum += fac(Number(digit));
        }

        if (sum === num) {
            total += num;
            numbers.push(num);
        }
    }
    return {
        sum: total,
        numbers: numbers
    };
}


function fac(n) {
    let prod = 1;

    for (let i = 1; i <= n; i++) {
        prod *= i;
    }

    return prod;
}
