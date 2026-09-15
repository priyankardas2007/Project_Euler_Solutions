def cyclical_figurate_nums(n):

    formulas = {
        3: lambda x: x * (x + 1) // 2,
        4: lambda x: x * x,
        5: lambda x: x * (3 * x - 1) // 2,
        6: lambda x: x * (2 * x - 1),
        7: lambda x: x * (5 * x - 3) // 2,
        8: lambda x: x * (3 * x - 2)
    }

    numbers = {}

    # Generate figurate numbers
    for type_ in range(3, n + 3):

        numbers[type_] = []

        x = 1

        while True:

            value = formulas[type_](x)

            if value >= 10000:
                break

            if value >= 1000 and value % 100 >= 10:
                numbers[type_].append(value)

            x += 1

    # prefix -> possible numbers
    prefix_map = {}

    for type_ in range(3, n + 3):

        for value in numbers[type_]:

            prefix = value // 100

            if prefix not in prefix_map:
                prefix_map[prefix] = []

            prefix_map[prefix].append({
                "value": value,
                "type": type_
            })

    total = 0

    # Store already-found cycles
    found = set()

    def search(chain, used_types, used_numbers):

        nonlocal total

        # We have n numbers
        if len(chain) == n:

            last = chain[-1]
            first = chain[0]

            # Check cyclic condition
            if last % 100 != first // 100:
                return

            # Prevent counting rotations of same cycle
            key = tuple(sorted(chain))

            if key in found:
                return

            found.add(key)

            total += sum(chain)

            return

        last = chain[-1]

        # Last two digits determine next prefix
        suffix = last % 100

        candidates = prefix_map.get(suffix)

        if not candidates:
            return

        for candidate in candidates:

            candidate_value = candidate["value"]
            candidate_type = candidate["type"]

            # Each figurate type only once
            if candidate_type in used_types:
                continue

            # Each number only once
            if candidate_value in used_numbers:
                continue

            used_types.add(candidate_type)
            used_numbers.add(candidate_value)
            chain.append(candidate_value)

            search(
                chain,
                used_types,
                used_numbers
            )

            chain.pop()
            used_types.remove(candidate_type)
            used_numbers.remove(candidate_value)

    # Start search
    for type_ in range(3, n + 3):

        for value in numbers[type_]:

            search(
                [value],
                {type_},
                {value}
            )

    return total
