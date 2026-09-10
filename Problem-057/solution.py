def square_root_convergents(n):

    count = 0

    numerator = 3
    denominator = 2

    for i in range(n):

        # Check if numerator has more digits
        if len(str(numerator)) > len(str(denominator)):
            count += 1

        # Update both simultaneously
        numerator, denominator = (
            numerator + 2 * denominator,
            numerator + denominator
        )

    return count


print(square_root_convergents(1000))
