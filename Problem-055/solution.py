def count_lychrel_numbers(num):

    count = 0

    for i in range(1, num):

        temp = i
        is_ly = True

        for j in range(50):

            temp = temp + reversed_num(temp)

            if pall(temp):
                is_ly = False
                break

        if is_ly:
            count += 1

    return count


def reversed_num(n):

    return int(str(n)[::-1])


def pall(n):

    return n == reversed_num(n)


print(count_lychrel_numbers(10000))
