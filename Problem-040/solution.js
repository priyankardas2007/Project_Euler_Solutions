function champernownesConstant(n) {
    let str = "";
    let num = 1;

    // Keep adding numbers until we have at least n digits
    while (str.length < n) {
        str += num.toString();
        num++;
    }

    let product = 1;

    // Positions: 1, 10, 100, ..., n
    for (let position = 1; position <= n; position *= 10) {
        product *= Number(str[position - 1]);
    }

    return product;
}

console.log(champernownesConstant(1000000)); // 210
