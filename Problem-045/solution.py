import math


def tri_penta_hexa(n):
    index = 1

    while True:
        # Generate a hexagonal number
        m = index * (2 * index - 1)

        # Hexagonal numbers are automatically triangular
        if m >= n and penta(m):
            return m

        index += 1


def penta(x):
    if x < 1:
        return False

    temp = math.isqrt(24 * x + 1)

    return temp * temp == 24 * x + 1 and (1 + temp) % 6 == 0


def hexa(x):
    if x < 1:
        return False

    temp = math.isqrt(8 * x + 1)

    return temp * temp == 8 * x + 1 and (1 + temp) % 4 == 0


def tri(num):
    if num < 1:
        return False

    root = math.isqrt(8 * num + 1)

    return root * root == 8 * num + 1 and (root - 1) % 2 == 0


