def name_score(name):
    score = 0

    for char in name:
        score += ord(char) - ord('A') + 1

    return score


def total_name_scores(names):

    # Sort alphabetically
    names.sort()

    total = 0

    for i in range(len(names)):

        position = i + 1

        score = name_score(names[i])

        total += score * position

    return total
