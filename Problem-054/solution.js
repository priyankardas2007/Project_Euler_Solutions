function pokerHands(arr) {

    function evaluateHand(hand) {

        const valueMap = {
            '2': 2, '3': 3, '4': 4, '5': 5,
            '6': 6, '7': 7, '8': 8, '9': 9,
            'T': 10, 'J': 11, 'Q': 12,
            'K': 13, 'A': 14
        };

        // Convert cards to values and sort descending
        let values = hand
            .map(card => valueMap[card[0]])
            .sort((a, b) => b - a);

        let suits = hand.map(card => card[1]);

        // Count occurrences of every card value
        let counts = {};

        for (let value of values) {
            counts[value] = (counts[value] || 0) + 1;
        }

        let groups = Object.entries(counts)
            .map(([value, count]) => ({
                value: Number(value),
                count: count
            }))
            .sort((a, b) => {
                if (b.count !== a.count) {
                    return b.count - a.count;
                }
                return b.value - a.value;
            });

        // Flush
        let flush = suits.every(suit => suit === suits[0]);

        // Straight
        let uniqueValues = [...new Set(values)];

        let straight = false;
        let straightHigh = values[0];

        if (uniqueValues.length === 5) {

            straight = values[0] - values[4] === 4;

            // Special case: A, 2, 3, 4, 5
            if (
                values.join(',') === '14,5,4,3,2'
            ) {
                straight = true;
                straightHigh = 5;
            }
        }

        // Straight Flush
        if (straight && flush) {
            return [8, straightHigh];
        }

        // Four of a Kind
        if (groups[0].count === 4) {
            return [
                7,
                groups[0].value,
                groups[1].value
            ];
        }

        // Full House
        if (
            groups[0].count === 3 &&
            groups[1].count === 2
        ) {
            return [
                6,
                groups[0].value,
                groups[1].value
            ];
        }

        // Flush
        if (flush) {
            return [5, ...values];
        }

        // Straight
        if (straight) {
            return [4, straightHigh];
        }

        // Three of a Kind
        if (groups[0].count === 3) {
            return [
                3,
                groups[0].value,
                ...groups
                    .slice(1)
                    .map(group => group.value)
                    .sort((a, b) => b - a)
            ];
        }

        // Two Pairs
        if (
            groups[0].count === 2 &&
            groups[1].count === 2
        ) {
            let pairs = [groups[0].value, groups[1].value]
                .sort((a, b) => b - a);

            return [
                2,
                ...pairs,
                groups[2].value
            ];
        }

        // One Pair
        if (groups[0].count === 2) {
            let pair = groups[0].value;

            let remaining = groups
                .slice(1)
                .map(group => group.value)
                .sort((a, b) => b - a);

            return [
                1,
                pair,
                ...remaining
            ];
        }

        // High Card
        return [0, ...values];
    }


    function player1Wins(hand1, hand2) {

        let rank1 = evaluateHand(hand1);
        let rank2 = evaluateHand(hand2);

        for (
            let i = 0;
            i < Math.max(rank1.length, rank2.length);
            i++
        ) {

            let a = rank1[i] || 0;
            let b = rank2[i] || 0;

            if (a > b) return true;
            if (a < b) return false;
        }

        return false;
    }


    let player1WinsCount = 0;

    for (let game of arr) {

        let cards = game.split(' ');

        let player1 = cards.slice(0, 5);
        let player2 = cards.slice(5, 10);

        if (player1Wins(player1, player2)) {
            player1WinsCount++;
        }
    }

    return player1WinsCount;
}


const testArr = [
    '8C TS KC 9H 4S 7D 2S 5D 3S AC',
    '5C AD 5D AC 9C 7C 5H 8D TD KS',
    '3H 7H 6S KC JS QH TD JC 2D 8S',
    'TH 8H 5C QS TC 9H 4D JC KS JS',
    '7C 5H KC QH JD AS KH 4C AD 4S'
];

console.log(pokerHands(testArr));
