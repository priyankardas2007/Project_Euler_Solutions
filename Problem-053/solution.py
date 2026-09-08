def combinatoric_selections(limit):

    count = 0

    for n in range(1, 101):

        for r in range(1, n + 1):

            value = combi(n, r)

            if value > limit:
                count += 1

    return count


def combi(n, r):

    return fac(n) // (fac(r) * fac(n - r))


def fac(n):

    prod = 1

    if n == 0:
        return 1

    for i in range(1, n + 1):
        prod *= i

    return prod


print(combinatoric_selections(1_000_000))
