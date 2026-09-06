function selfPowers(power, lastDigits) {
    const mod = 10n ** BigInt(lastDigits);
    let sum = 0n;

    for (let i = 1n; i <= BigInt(power); i++) {
        sum = (sum + i ** i) % mod;
    }

    return Number(sum);
}
