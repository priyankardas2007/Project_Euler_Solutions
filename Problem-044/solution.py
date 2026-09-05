def pentagon_numbers():
    def pentagonal(n):
        return n * (3 * n - 1) // 2

    def is_pentagonal(num):
        if num <= 0:
            return False

        x = 24 * num + 1
        root = int(x ** 0.5)

        return root * root == x

    pentagonal_set = set()

    # Generate pentagonal numbers
    for n in range(1, 10000):
        pentagonal_set.add(pentagonal(n))

    smallest_difference = float("inf")

    for k in range(2, 10000):
        pk = pentagonal(k)

        for j in range(k - 1, 0, -1):
            pj = pentagonal(j)

            difference = pk - pj

            if difference >= smallest_difference:
                break

            total = pk + pj

            if difference in pentagonal_set and total in pentagonal_set:
                smallest_difference = difference

    return smallest_difference


print(pentagon_numbers())
