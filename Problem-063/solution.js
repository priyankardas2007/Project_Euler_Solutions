function powerfulDigitCounts(n) {
  let count = 0;
  for (let a = 1; a<=9; a++){
    let num = BigInt(a)**BigInt(n);
    if (num.toString().length === n){
      count++;
    }
  }

  return count;
}
