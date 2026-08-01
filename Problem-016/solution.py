def power_digit_sum(exponent):
    result = 2 ** exponent

    total = 0

    for digit in str(result):
        total += int(digit)

    return total
