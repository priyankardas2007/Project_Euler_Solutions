def pandigital_products(n):
    products = set()

    for a in range(1, 1000):
        for b in range(a, 10000):

            product = a * b

            combined = str(a) + str(b) + str(product)

            if len(combined) != n:
                continue

            if is_pandigital(combined, n):
                products.add(product)

    return sum(products)


def is_pandigital(s, n):

    # No zero allowed
    if "0" in s:
        return False

    # All digits must be unique
    if len(set(s)) != n:
        return False

    # Must contain 1 through n
    for i in range(1, n + 1):
        if str(i) not in s:
            return False

    return True
