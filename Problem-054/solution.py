def poker_hands(arr):

    def evaluate_hand(hand):

        value_map = {
            '2': 2, '3': 3, '4': 4, '5': 5,
            '6': 6, '7': 7, '8': 8, '9': 9,
            'T': 10, 'J': 11, 'Q': 12,
            'K': 13, 'A': 14
        }

        # Convert cards to values and sort descending
        values = sorted(
            [value_map[card[0]] for card in hand],
            reverse=True
        )

        suits = [card[1] for card in hand]

        # Count occurrences of every card value
        counts = {}

        for value in values:
            counts[value] = counts.get(value, 0) + 1

        # Sort by count first, then card value
        groups = sorted(
            counts.items(),
            key=lambda x: (x[1], x[0]),
            reverse=True
        )

        # Flush
        flush = all(suit == suits[0] for suit in suits)

        # Straight
        unique_values = set(values)

        straight = False
        straight_high = values[0]

        if len(unique_values) == 5:

            if values[0] - values[4] == 4:
                straight = True

            # Special case: A, 2, 3, 4, 5
            if values == [14, 5, 4, 3, 2]:
                straight = True
                straight_high = 5

        # Straight Flush
        if straight and flush:
            return [8, straight_high]

        # Four of a Kind
        if groups[0][1] == 4:
            return [
                7,
                groups[0][0],
                groups[1][0]
            ]

        # Full House
        if groups[0][1] == 3 and groups[1][1] == 2:
            return [
                6,
                groups[0][0],
                groups[1][0]
            ]

        # Flush
        if flush:
            return [5] + values

        # Straight
        if straight:
            return [4, straight_high]

        # Three of a Kind
        if groups[0][1] == 3:

            remaining = sorted(
                [group[0] for group in groups[1:]],
                reverse=True
            )

            return [
                3,
                groups[0][0],
                *remaining
            ]

        # Two Pairs
        if groups[0][1] == 2 and groups[1][1] == 2:

            pairs = sorted(
                [groups[0][0], groups[1][0]],
                reverse=True
            )

            return [
                2,
                *pairs,
                groups[2][0]
            ]

        # One Pair
        if groups[0][1] == 2:

            pair = groups[0][0]

            remaining = sorted(
                [group[0] for group in groups[1:]],
                reverse=True
            )

            return [
                1,
                pair,
                *remaining
            ]

        # High Card
        return [0] + values


    def player1_wins(hand1, hand2):

        rank1 = evaluate_hand(hand1)
        rank2 = evaluate_hand(hand2)

        for a, b in zip(rank1, rank2):

            if a > b:
                return True

            if a < b:
                return False

        return False


    player1_wins_count = 0

    for game in arr:

        cards = game.split()

        player1 = cards[:5]
        player2 = cards[5:10]

        if player1_wins(player1, player2):
            player1_wins_count += 1

    return player1_wins_count
