def multiples_of_3_or_5(limit):
    total = 0

    for i in range(limit):
        if i % 3 == 0 or i % 5 == 0:
            total += i

    return total

print(multiples_of_3_or_5(1000))
