def number_spiral_diagonals(n):

    total = 1

    for size in range(3, n + 1, 2):

        square = size * size
        step = size - 1

        total += square
        total += square - step
        total += square - 2 * step
        total += square - 3 * step

    return total
