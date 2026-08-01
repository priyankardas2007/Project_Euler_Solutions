function numberLetterCounts(limit) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    function numberToWords(n) {

        // 1 - 19
        if (n < 20) {
            return ones[n];
        }

        // 20 - 99
        if (n < 100) {
            return tens[Math.floor(n / 10)] + ones[n % 10];
        }

        // 100 - 999
        if (n < 1000) {
            let result = ones[Math.floor(n / 100)] + "hundred";

            if (n % 100 !== 0) {
                result += "and" + numberToWords(n % 100);
            }

            return result;
        }

        // 1000
        if (n === 1000) {
            return "onethousand";
        }
    }

    let total = 0;

    for (let i = 1; i <= limit; i++) {
        total += numberToWords(i).length;
    }

    return total;
}

console.log(numberLetterCounts(1000));
