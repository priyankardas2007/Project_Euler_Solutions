def permuted_multiples(n):

    def same_digit(a, b):
        return sorted(str(a)) == sorted(str(b))

    x = 1

    while True:

        found = True

        for multiplier in range(2, n + 1):

            if not same_digit(x, x * multiplier):
                found = False
                break

        if found:
            return x

        
        x += 1


