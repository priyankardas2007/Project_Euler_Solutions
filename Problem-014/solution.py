def longest_collatz_sequence(limit):
    longest = 0
    answer = 0

    for n in range(1, limit):
        num = n
        length = 1

        while num != 1:
            if num % 2 == 0:
                num = num // 2
            else:
                num = 3 * num + 1

            length += 1

        if length > longest:
            longest = length
            answer = n

    return answer

