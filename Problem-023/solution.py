def sum_of_divisors(n):
    if n == 1:
        return 0

    total = 1

    i = 2
    while i * i <= n:
        if n % i == 0:
            total += i

            if i != n // i:
                total += n // i

        i += 1

    return total


def sumOfNonAbundantNumbers(n):

    # Find all abundant numbers <= n
    abundant_numbers = []

    for i in range(1, n + 1):
        if sum_of_divisors(i) > i:
            abundant_numbers.append(i)

    # Track numbers that can be written
    # as the sum of two abundant numbers
    abundant_sums = [False] * (n + 1)

    for i in range(len(abundant_numbers)):
        for j in range(i, len(abundant_numbers)):

            total = abundant_numbers[i] + abundant_numbers[j]

            if total > n:
                break

            abundant_sums[total] = True

    # Add numbers that cannot be written
    # as the sum of two abundant numbers
    answer = 0

    for i in range(1, n + 1):
        if not abundant_sums[i]:
            answer += i

    return answer
