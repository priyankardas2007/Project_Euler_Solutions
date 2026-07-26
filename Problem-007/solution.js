function isPrime(n) {
  if ( n<2) return false;
  if (n === 2 ) return true;
  if (n%2 ===0) return false;

  for (let i = 3; i*i<= n ; i+=2){
    if (n%i ===0){
      return false;
    }
  }

  return true;
}

function nthPrime(n) {
  let count = 0;
  let number = 1;
  while(count <n){
    number++;
    if(isPrime(number)){
      count++;

    }
  }
  return number;
}
