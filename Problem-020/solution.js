function sumFactorialDigits(n) {
  let sum = 0n;
  let prod = 1n;
  for (let i =1n;i <= BigInt(n); i ++){
    prod = prod*i;
  }
  for ( let digit of prod.toString()){
    sum += BigInt(digit);
  }
  return Number(sum);
}
