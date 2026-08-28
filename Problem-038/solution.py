def pandigital_multiples(k):
    largest = 0

    # Required digits, e.g. k = 5 → "12345"
    required = "".join(str(i) for i in range(1, k + 1))

    # Try different starting numbers
    for num in range(1, 100000):
        combined = ""
        multiplier = 1

        # Concatenate num×1, num×2, num×3...
        while len(combined) < k:
            combined += str(num * multiplier)
            multiplier += 1

        if (
            len(combined) == k
            and multiplier > 2
            and "".join(sorted(combined)) == required
        ):
            largest = max(largest, int(combined))

    return largest


print(pandigital_multiples(9))
