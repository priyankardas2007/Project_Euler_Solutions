def largest_palindrome_product(n):
    max_num = 10**n - 1
    min_num = 10**(n - 1)
    largest = 0

    for i in range(max_num, min_num - 1, -1):
        for j in range(i, min_num - 1, -1):
            product = i * j

            if product <= largest:
                break

            if str(product) == str(product)[::-1]:
                largest = product

    return largest
