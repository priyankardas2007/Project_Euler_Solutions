function codedTriangleNumbers(n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        let word = words[i];
        let score = 0;
        for (let char of word) {
            score += char.charCodeAt(0) - 64;
        }
        if (isTriangle(score)) {
            count++;
        }
    }

    return count;
}

function isTriangle(num) {
    let n = 1;
    let triangle = 1;

    while (triangle <= num) {
        if (triangle === num) {
            return true;
        }

        n++;
        triangle = n * (n + 1) / 2;
    }

    return false;
}


