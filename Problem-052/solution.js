function permutedMultiples(n) {
  function sameDigit(a,b){
    return a.toString().split('').sort().join('')=== b.toString().split('').sort().join('');
  }
   let x = 1;
   while(true){
    let found = true;
    for (let multiplier = 2; multiplier <= n; multiplier ++){
      if ( !sameDigit(x, x*multiplier)){
        found = false;
        break;
      }
    }
    if (found) return x;
    x++;
   }
}
