def digit_power_sum(n, power):
    total = 0

    for digit in str(n):
        total += int(digit) ** power

    return total


def digit_fifth_powers(power):

    total = 0

    for n in range(2, 1000001):

        if digit_power_sum(n, power) == n:
            total += n

    return total
