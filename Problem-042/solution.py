def coded_triangle_numbers(n):
    count = 0

    for i in range(n):
        word = words[i]
        score = 0

        for char in word:
            score += ord(char) - ord('A') + 1

        if is_triangle(score):
            count += 1

    return count


def is_triangle(num):
    n = 1
    triangle = 1

    while triangle <= num:
        if triangle == num:
            return True

        n += 1
        triangle = n * (n + 1) // 2

    return False
