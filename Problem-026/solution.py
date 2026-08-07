def reciprocal_cycles(n):
    longest_cycle = 0
    answer = 0

    for d in range(2, n):

        remainders = {}
        remainder = 1
        position = 0

        while remainder != 0 and remainder not in remainders:

            remainders[remainder] = position

            remainder = (remainder * 10) % d

            position += 1

        if remainder != 0:
            cycle_length = position - remainders[remainder]

            if cycle_length > longest_cycle:
                longest_cycle = cycle_length
                answer = d

    return answer
