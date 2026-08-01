function longestCollatzSequence(limit) {
    let longest = 0;
    let answer = 0;

    for (let n = 1; n < limit; n++) {
        let num = n;
        let length = 1;

        while (num !== 1) {
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = 3 * num + 1;
            }

            length++;
        }

        if (length > longest) {
            longest = length;
            answer = n;
        }
    }

    return answer;
}

