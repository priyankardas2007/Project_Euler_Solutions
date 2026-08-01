function powerDigitSum(exponent) {
  let result = 1n;
  let total = 0n;
  for (let i = 1;i<= BigInt(exponent);i++){
    result = result*2n;

  }
  for(let num of result.toString()){
    total += BigInt(num);

  }

  return Number(total);
}
