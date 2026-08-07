function reciprocalCycles(n) {
    let longestCycle = 0;
    let answer = 0;

    for (let d = 2; d < n; d++) {

        let remainders = [];
        let remainder = 1;
        let position = 0;

        while (remainder !== 0 && remainders[remainder] === undefined) {

            remainders[remainder] = position;

            remainder = (remainder * 10) % d;

            position++;
        }

        if (remainder !== 0) {
            let cycleLength = position - remainders[remainder];

            if (cycleLength > longestCycle) {
                longestCycle = cycleLength;
                answer = d;
            }
        }
    }

    return answer;
}
