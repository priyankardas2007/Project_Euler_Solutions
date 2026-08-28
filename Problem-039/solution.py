def int_right_triangles(n):
    max_solutions = 0
    result = 0

    # Check every possible perimeter
    for p in range(1, n + 1):
        count = 0

        # Try possible sides a and b
        for a in range(1, p // 3):
            for b in range(a + 1, p // 2):
                c = p - a - b

                # Check Pythagorean theorem
                if a * a + b * b == c * c:
                    count += 1

        # Keep the perimeter with the most solutions
        if count > max_solutions:
            max_solutions = count
            result = p

    return result


print(int_right_triangles(1000))
