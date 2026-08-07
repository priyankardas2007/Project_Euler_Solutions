function totalnamesScores(name) {
    let score = 0;

    for (let char of name) {
        score += char.charCodeAt(0) - 64;
    }

    return score;
}

function namesScores(names) {

    names.sort();

    let total = 0;

    for (let i = 0; i < names.length; i++) {

        let position = i + 1;

        let score = totalnamesScores(names[i]);

        total += score * position;
    }

    return total;
}

const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
