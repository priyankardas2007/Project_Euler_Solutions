import math

def lexicographicPermutations(n):

    digits = list("0123456789")
    result = ""

    for i in range(9, -1, -1):

        factorial = math.factorial(i)

        index = n // factorial

        result += digits.pop(index)

        n = n % factorial

    return int(result)
