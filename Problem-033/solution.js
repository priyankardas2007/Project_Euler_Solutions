function digitCancellingFractions() {
  let numeratorproduct = 1;
  let denominatorproduct =1;
  for (let numerator = 10 ; numerator<100; numerator ++){
    for (let denominator = numerator+1; denominator < 100; denominator ++){
      let nstr = numerator.toString();
      let dstr = denominator.toString();
      if (nstr[1] === "0" && dstr[1] === "0"){
        continue;
      }
      for ( let digit of nstr ){
        if ( digit === "0") continue;
        if (dstr.includes(digit)){
          let newN = nstr.replace(digit,"");
          let newD = dstr.replace(digit, "");
          if (newD ==="0") continue;
          if (numerator/denominator === Number(newN)/ Number(newD)){
            numeratorproduct *= numerator;
            denominatorproduct *= denominator;
          }
          break;
        }
      }
    }
  }
  let divisor = gcd(numeratorproduct , denominatorproduct)
  return denominatorproduct/ divisor;
}

function gcd(a,b){
  while(b!==0){
    let temp = b;
    b = a %b;
    a = temp;
  }
  return a;
}
digitCancellingFractions();
