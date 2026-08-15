function coinSums(n) {
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];

    let ways = new Array(n + 1).fill(0);

    ways[0] = 1;

    for (let coin of coins) {
        for (let amount = coin; amount <= n; amount++) {
            ways[amount] += ways[amount - coin];
        }
    }

    return ways[n];
}
