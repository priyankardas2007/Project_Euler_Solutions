def champernownes_constant(n):
    string = ""
    num = 1

    # Build the constant
    while len(string) < n:
        string += str(num)
        num += 1

    product = 1

    # Get positions 1, 10, 100, ..., n
    position = 1

    while position <= n:
        product *= int(string[position - 1])
        position *= 10

    return product


print(champernownes_constant(1_000_000))  # 210
