def sum_of_divisors(n):
    total = 0

    for i in range(1, n):
        if n % i == 0:
            total += i

    return total


def amicable_numbers(limit):
    total = 0

    for a in range(1, limit):

        b = sum_of_divisors(a)

        if b != a and b < limit:
            if sum_of_divisors(b) == a:
                total += a

    return total


