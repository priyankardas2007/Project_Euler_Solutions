function digitnPowers(n) {
    let total = 0;

    for (let num = 2; num <= 1000000; num++) {

        let sum = 0;

        for (let digit of num.toString()) {
            sum += Number(digit) ** n;
        }

        if (sum === num) {
            total += num;
        }
    }

    return total;
}
