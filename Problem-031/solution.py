def coin_sums(n):
    coins = [1, 2, 5, 10, 20, 50, 100, 200]

    ways = [0] * (n + 1)

    ways[0] = 1

    for coin in coins:
        for amount in range(coin, n + 1):
            ways[amount] += ways[amount - coin]

    return ways[n]
