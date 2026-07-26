function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function smallestMult(n) {
    let lcm = 1;

    for (let i = 1; i <= n; i++) {
        lcm = (lcm * i) / gcd(lcm, i);
    }

    return lcm;
}
