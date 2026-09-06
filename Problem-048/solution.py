def self_powers(power, last_digits):
    mod = 10 ** last_digits
    total = 0

    for i in range(1, power + 1):
        total = (total + pow(i, i, mod)) % mod

    return total
