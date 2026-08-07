def is_prime(n):
    if n < 2:
        return False

    i = 2

    while i * i <= n:
        if n % i == 0:
            return False

        i += 1

    return True


def quadratic_primes(n):

    best_a = 0
    best_b = 0
    max_length = 0

    for a in range(-n + 1, n):

        for b in range(-n, n + 1):

            count = 0

            while True:

                value = count * count + a * count + b

                if not is_prime(value):
                    break

                count += 1

            if count > max_length:
                max_length = count
                best_a = a
                best_b = b

    return best_a * best_b


print(quadratic_primes(1000))
