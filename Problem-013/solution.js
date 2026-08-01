function largeSum(arr) {
    let sum = 0n;

    for (let num of arr) {
        sum += BigInt(num);
    }

    return Number(sum.toString().slice(0, 10));
}
