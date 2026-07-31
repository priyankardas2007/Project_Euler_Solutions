function countDivisors(num) {
    let count = 0;

    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            count++;

            if (i !== num / i) {
                count++;
            }
        }
    }

    return count;
}

function divisibleTriangleNumber(n) {
  let triangle = 0;
  let i = 1;
  while (true){
    triangle+=i;
    if (countDivisors(triangle)>n){
      return triangle;
    }
    i++;
  }
}

divisibleTriangleNumber(500);
