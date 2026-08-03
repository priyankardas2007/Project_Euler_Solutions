def fibonacci(n):
    a = 1
    b = 1
    index = 2

    while len(str(b)) < n:
        a, b = b, a + b
        index += 1

    return index


print(fibonacci(1000))
