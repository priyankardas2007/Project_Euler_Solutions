def powerful_digit_sum(n):

    maximum = 0

    for a in range(1, n):

        for b in range(1, n):

            power = a ** b

            digit_sum = sum(
                int(digit)
                for digit in str(power)
            )

            if digit_sum > maximum:
                maximum = digit_sum

    return maximum


print(powerful_digit_sum(100))
