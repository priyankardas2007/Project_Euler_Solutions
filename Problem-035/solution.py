def circular_primes(n):
    count = 0

    # Check every number below n
    for num in range(2, n):
        string = str(num)
        circular = True

        # Check every rotation
        for i in range(len(string)):
            rotated = string[i:] + string[:i]

            if not is_prime(int(rotated)):
                circular = False
                break

        # If all rotations are prime
        if circular:
            count += 1

    return count


def is_prime(m):
    if m < 2:
        return False

    for i in range(2, int(m ** 0.5) + 1):
        if m % i == 0:
            return False

    return True


print(circular_primes(1_000_000))
