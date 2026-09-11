function spiralPrimes(percent) {
  let side = 1;

    let primeCount = 0;
    let diagonalCount = 1;

    while (true) {

        side += 2;

        let square = side * side;
        let step = side - 1;


        for (let i = 1; i <= 3; i++) {

            let corner = square - i * step;

            if (isPrime(corner)) {
                primeCount++;
            }
        }

        diagonalCount += 4;

        let ratio = (primeCount / diagonalCount) * 100;

        if (ratio < percent) {
            return side;
        }
    }
}

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
  }
spiralPrimes(50);
console.log(isPrime(51))
