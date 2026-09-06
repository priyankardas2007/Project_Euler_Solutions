def consecutive_prime_sum(limit):

    # Generate all primes below limit using Sieve of Eratosthenes
    is_prime = [True] * limit
    is_prime[0] = is_prime[1] = False

    for i in range(2, int(limit ** 0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, limit, i):
                is_prime[j] = False

    # Store prime numbers
    primes = []

    for i in range(2, limit):
        if is_prime[i]:
            primes.append(i)

    # Prefix sums
    prefix = [0]

    for p in primes:
        prefix.append(prefix[-1] + p)

    max_length = 0
    answer = 0

    # Try every starting prime
    for start in range(len(primes)):

        # Start after the current best length
        for end in range(start + max_length + 1, len(primes) + 1):

            total = prefix[end] - prefix[start]

            if total >= limit:
                break

            if is_prime[total]:
                max_length = end - start
                answer = total

    return answer


print(consecutive_prime_sum(1_000_000))
