function pandigitalPrime(n) {
    const digits = [];

    for (let i = n; i >= 1; i--) {
        digits.push(i);
    }

    return findLargestPrime(digits, 0);
}


function findLargestPrime(arr, index) {
    if (index === arr.length) {
        const num = Number(arr.join(""));

        return isPrime(num) ? num : -1;
    }

    for (let i = index; i < arr.length; i++) {
        [arr[index], arr[i]] = [arr[i], arr[index]];

        const result = findLargestPrime(arr, index + 1);
        [arr[index], arr[i]] = [arr[i], arr[index]];

        if (result !== -1) {
            return result;
        }
    }

    return -1;
}


function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}


console.log(pandigitalPrime(4)); 
