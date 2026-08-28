function pandigitalMultiples(k) {
    let largest = 0;
    const target = "";
    let required = "";
    for (let i = 1; i <= k; i++) {
        required += i;
    }
    for (let num = 1; num < 100000; num++) {
        let combined = "";
        let multiplier = 1;
        while (combined.length < k) {
            combined += num * multiplier;
            multiplier++;
        }
        if (
            combined.length === k &&
            multiplier > 2 &&
            isPandigital(combined, required)
        ) {
            largest = Math.max(largest, Number(combined));
        }
    }

    return largest;
}


function isPandigital(str, required) {
    return str.split("").sort().join("") === required;
}
