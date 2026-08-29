from itertools import permutations
from math import isqrt


def is_prime(num):
    if num < 2:
        return False

    for i in range(2, isqrt(num) + 1):
        if num % i == 0:
            return False

    return True


def pandigital_prime(n):
    # Create digits in descending order: n, n-1, ..., 1
    digits = [str(i) for i in range(n, 0, -1)]

    # Generate permutations
    for perm in permutations(digits):
        num = int("".join(perm))

        # First prime found is the largest one
        if is_prime(num):
            return num

    return -1


print(pandigital_prime(4))
