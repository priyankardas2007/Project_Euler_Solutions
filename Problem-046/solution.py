def goldbachs_other_conjecture():

    n = 9

    while True:

        # Check only composite numbers
        if not prime(n):

            found = False

            # Try every prime smaller than n
            for p in range(2, n):

                if prime(p):

                    temp = n - p

                    # Check whether temp = 2 × square
                    if temp % 2 == 0 and int((temp / 2) ** 0.5) ** 2 == temp / 2:
                        found = True
                        break

            # If no representation exists
            if not found:
                return n

        # Move to the next odd number
        n += 2


def prime(n):

    if n < 2:
        return False

    i = 2

    while i * i <= n:

        if n % i == 0:
            return False

        i += 1

    return True


print(goldbachs_other_conjecture())
