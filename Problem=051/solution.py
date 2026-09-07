def prime_digit_replacements(n):

    def is_prime(num):
        if num < 2:
            return False

        i = 2

        while i * i <= num:
            if num % i == 0:
                return False
            i += 1

        return True


    num = 11

    while True:

        # Only work with prime numbers
        if is_prime(num):

            digits = str(num)

            # Check each possible digit
            for digit in "0123456789":

                # Find all positions containing this digit
                positions = []

                for i in range(len(digits)):
                    if digits[i] == digit:
                        positions.append(i)

                if not positions:
                    continue

                # Try every non-empty subset of positions
                for mask in range(1, 1 << len(positions)):

                    prime_count = 0

                    # Replace selected positions with 0 to 9
                    for replacement in "0123456789":

                        new_digits = list(digits)

                        for j in range(len(positions)):

                            if mask & (1 << j):
                                new_digits[positions[j]] = replacement

                        # Leading zero is invalid
                        if new_digits[0] == "0":
                            continue

                        new_number = int("".join(new_digits))

                        if is_prime(new_number):
                            prime_count += 1

                    # Required prime family found
                    if prime_count == n:
                        return num

        num += 1


print(prime_digit_replacements(8))
