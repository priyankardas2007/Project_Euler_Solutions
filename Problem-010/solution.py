def is_prime(num):
    if num < 2:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False

    i = 3
    while i * i <= num:
        if num % i == 0:
            return False
        i += 2

    return True


def summation_of_primes(limit):
    total = 0

    for i in range(2, limit):
        if is_prime(i):
            total += i

    return total
