function fiboEvenSum(limit) {
    let a = 1;
    let b = 2;
    let sum = 0;

    while (a <= limit) {
        if (a % 2 === 0) {
            sum += a;
        }

        let next = a + b;
        a = b;
        b = next;
    }

    return sum;
}
