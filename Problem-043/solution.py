def substring_divisibility(n):
    primes = [2, 3, 5, 7, 11, 13, 17]
    total = 0

    digits = list(range(n + 1))

    def search(current, used):
        nonlocal total

        pos = len(current)

        # Check divisibility once we have 4 digits
        if pos >= 4:
            number = (
                current[pos - 3] * 100
                + current[pos - 2] * 10
                + current[pos - 1]
            )

            prime = primes[pos - 4]

            if number % prime != 0:
                return

        # Complete pandigital number
        if pos == n + 1:
            number = int("".join(map(str, current)))
            total += number
            return

        for digit in digits:
            if digit in used:
                continue

            used.add(digit)
            current.append(digit)

            search(current, used)

            current.pop()
            used.remove(digit)

    search([], set())

    return total
