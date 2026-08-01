def sum_factorial_digits(n):
    prod = 1

    for i in range(1, n + 1):
        prod *= i

    total = 0

    for digit in str(prod):
        total += int(digit)

    return total


