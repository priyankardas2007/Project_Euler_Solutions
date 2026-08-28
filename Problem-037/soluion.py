def is_prime(num):
    if num < 2:
        return False

    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False

    return True


def is_truncatable_prime(num):
    string = str(num)

    # Remove digits from the left
    for i in range(len(string)):
        left = int(string[i:])

        if not is_prime(left):
            return False

    # Remove digits from the right
    for i in range(len(string)):
        right = int(string[:len(string) - i])

        if not is_prime(right):
            return False

    return True


def truncatable_primes(n):
    total = 0
    found = 0
    num = 11  # Single-digit primes are not included

    while found < n:
        if is_truncatable_prime(num):
            total += num
            found += 1

        num += 1

    return total


print(truncatable_primes(11))
