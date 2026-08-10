def distinct_powers(n):

    values = set()

    for a in range(2, n + 1):
        for b in range(2, n + 1):
            values.add(a ** b)

    return len(values)
