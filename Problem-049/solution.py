import math


def prime_permutations():

    def is_prime(n):
        if n < 2:
            return False

        for i in range(2, math.isqrt(n) + 1):
            if n % i == 0:
                return False

        return True


    def are_permutations(a, b, c):
        return (
            sorted(str(a)) ==
            sorted(str(b)) ==
            sorted(str(c))
        )


    for a in range(1000, 10000):

        if not is_prime(a):
            continue

        for b in range(a + 1, 10000):

            if not is_prime(b):
                continue

            # Common difference
            difference = b - a

            # Third number in arithmetic sequence
            c = b + difference

            if c >= 10000:
                break

            if is_prime(c) and are_permutations(a, b, c):

                # Skip the example sequence
                # 1487, 4817, 8147
                if a == 1487:
                    continue

                return int(str(a) + str(b) + str(c))


print(prime_permutations())
