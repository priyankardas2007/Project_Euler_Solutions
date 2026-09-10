function powerfulDigitSum(n) {
  let max =0;
  for (let a= 1;a<n; a++){
    for (let b=1;b<n;b++){
      let power = BigInt(a)** BigInt(b);
      let sum = power.toString().split("").reduce((total,digit)=>{
        return total +Number(digit);
      },0);
      if (sum>max){
        max = sum;
      }
    }
  }
  return max;
}
