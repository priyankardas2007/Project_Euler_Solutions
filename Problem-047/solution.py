def distinct_prime_factors(target_num_primes, target_consecutive):

    def count_prime_factors(num):
        factors = 0
        divisor = 2

        while divisor * divisor <= num:

            if num % divisor == 0:
                factors += 1

                # Remove all occurrences of this prime factor
                while num % divisor == 0:
                    num //= divisor

            divisor += 1

        # If a prime factor remains
        if num > 1:
            factors += 1

        return factors


    consecutive = 0
    num = 2

    while True:

        if count_prime_factors(num) == target_num_primes:
            consecutive += 1
        else:
            consecutive = 0

        if consecutive == target_consecutive:
            return num - target_consecutive + 1

        num += 1
