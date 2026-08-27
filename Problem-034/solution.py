def factorial(n):
    result = 1

    for i in range(1, n + 1):
        result *= i

    return result


def digit_factorial():
    total = 0

    for num in range(10, 2540161):
        digit_sum = 0

        for digit in str(num):
            digit_sum += factorial(int(digit))

        if digit_sum == num:
            total += num

    return total


print(digit_factorial())
