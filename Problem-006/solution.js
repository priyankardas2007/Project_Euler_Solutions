function sumSquareDifference(n) {
    let sumOfSquares = 0;
    let sumOfNumbers = 0;

    for (let i = 1; i <= n; i++) {
        sumOfSquares += i * i;
        sumOfNumbers += i;
    }

    let squareOfSum = sumOfNumbers * sumOfNumbers;

    return squareOfSum - sumOfSquares;
}
