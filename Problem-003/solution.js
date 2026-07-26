function largestPrimeFactor(n) {
    let factor = 2;

    while (factor * factor <= n) {
        if (n % factor === 0) {
            n /= factor;
        } else {
            factor += (factor === 2) ? 1 : 2;
        }
    }

    return n;
}
