function triPentaHexa(n) {
    let index = 1;

    while (true) {
        let m = index * (2 * index - 1);

        if (m >= n && penta(m)) {
            return m;
        }

        index++;
    }
}


function penta(x) {
    if (x < 1) return false;

    let temp = Math.sqrt(24 * x + 1);

    return Number.isInteger(temp) && (1 + temp) % 6 === 0;
}


function hex(x) {
    if (x < 1) return false;

    let temp = Math.sqrt(8 * x + 1);

    return Number.isInteger(temp) && (1 + temp) % 4 === 0;
}


function tri(num) {
    if (num < 1) return false;

    const root = Math.sqrt(8 * num + 1);

    return Number.isInteger(root) && (root - 1) % 2 === 0;
}


console.log(triPentaHexa(40756));
