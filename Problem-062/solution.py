
def cubicPermutations(n):
    groups = {}
    i = 1

    while True:
        cube = i ** 3

        # Generate sorted digit signature
        sign = ''.join(sorted(str(cube)))

        # Create a new group if signature doesn't exist
        if sign not in groups:
            groups[sign] = []

        # Add cube to its corresponding group
        groups[sign].append(cube)

        # Check whether the next cube has a different digit length
        nextcube = (i + 1) ** 3

        if len(str(nextcube)) != len(str(cube)):

            # Check groups for exactly n matching cubes
            for values in groups.values():
                if len(values) == n:
                    return values[0]

            # Clear groups before starting the next digit length
            groups.clear()

        i += 1


print(cubicPermutations(5))
