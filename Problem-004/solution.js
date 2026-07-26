function largestPalindromeProduct(n) {
    let largest = 0;
    const max = 10 ** n - 1;
    const min = 10 ** (n - 1);

    function isPalindrome(num) {
        let str = num.toString();
        return str === str.split("").reverse().join("");
    }

    for (let i = max; i >= min; i--) {
        for (let j = i; j >= min; j--) {
            let product = i * j;

            if (product <= largest) break;

            if (isPalindrome(product)) {
                largest = product;
            }
        }
    }

    return largest;
}
