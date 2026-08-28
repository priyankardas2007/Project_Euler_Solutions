function doubleBasePalindromes(n) {
    let total = 0;

    for (let i = 1; i < n; i++) {
        if (pali(i) && pali(toBinary(i))) {
            total += i;
        }
    }

    return total;
}


function toBinary(m) {
    return m.toString(2);
}


function pali(p) {
    let str = p.toString();

    return str === str.split('').reverse().join('');
}
