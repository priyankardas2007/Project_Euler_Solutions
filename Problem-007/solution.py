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


def nth_prime(n):
    count = 0
    number = 1

    while count < n:
        number += 1
        if is_prime(number):
            count += 1

    return number
