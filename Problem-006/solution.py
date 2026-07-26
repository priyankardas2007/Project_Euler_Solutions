def sum_square_difference(n):
    sum_of_squares = 0
    sum_of_numbers = 0

    for i in range(1, n + 1):
        sum_of_squares += i * i
        sum_of_numbers += i

    square_of_sum = sum_of_numbers ** 2

    return square_of_sum - sum_of_squares
