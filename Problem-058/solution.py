def spiral_primes(percent):

    def is_prime(n):

        if n < 2:
            return False

        if n == 2:
            return True

        if n % 2 == 0:
            return False

        i = 3

        while i * i <= n:
            if n % i == 0:
                return False

            i += 2

        return True


    side = 1
    prime_count = 0
    diagonal_count = 1


    while True:

        
        side += 2

        square = side * side
        step = side - 1

        
        for i in range(1, 4):

            corner = square - i * step

            if is_prime(corner):
                prime_count += 1

        
        diagonal_count += 4

        ratio = (prime_count / diagonal_count) * 100

        if ratio < percent:
            return side


print(spiral_primes(10))
