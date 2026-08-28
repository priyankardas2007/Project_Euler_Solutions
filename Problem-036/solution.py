def double_base_palindromes(n):
    total = 0

    for i in range(1, n):
        if palindrome(i) and palindrome(to_binary(i)):
            total += i

    return total


def to_binary(num):
    return bin(num)[2:]


def palindrome(value):
    string = str(value)
    return string == string[::-1]


print(double_base_palindromes(1_000_000))
