function lexicographicPermutations(n) {
    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let result = "";

    for (let i = 9; i >= 0; i--) {
        let factorial = 1;

        for (let j = 2; j <= i; j++) {
            factorial *= j;
        }
        let index = Math.floor(n / factorial);
        result += digits[index];
        digits.splice(index, 1);
        n = n % factorial;
    }

    return Number(result);
}
