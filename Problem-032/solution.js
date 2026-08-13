function pandigitalProducts(n) {
    let products = new Set();

    for (let a = 1; a < 10000; a++) {
        for (let b = a; b < 10000; b++) {

            let product = a * b;

            let combined =
                String(a) +
                String(b) +
                String(product);

            if (combined.length !== n) {
                continue;
            }

            if (isPandigital(combined, n)) {
                products.add(product);
            }
        }
    }

    let total = 0;

    for (let product of products) {
        total += product;
    }

    return total;
}


function isPandigital(str, n) {


    if (str.includes("0")) {
        return false;
    }


    let digits = new Set(str);

    if (digits.size !== n) {
        return false;
    }


    for (let i = 1; i <= n; i++) {
        if (!digits.has(String(i))) {
            return false;
        }
    }

    return true;
}
