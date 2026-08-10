function distinctPowers(n) {
  let value = new Set();
  for( let a = 2; a<= n;a++){
    for (let b = 2; b<= n; b++){
      value.add(BigInt(a)**BigInt(b));

    }
  }
  return value.size;
}
