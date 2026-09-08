function combinatoricSelections(limit) {
  let count = 0;
  for (let n = 1; n<=100;n++){
    for (let r =1; r<=n; r++){
      if(combi(n,r)> limit){
        count++;
      }
    }
  }
  return count;
}
function combi(n,r){
  return fac(n)/(fac(r)*fac(n-r));
}
function fac(n){
    let prod =1;
    if (n === 0) return 1;
    for ( let i = 1; i<=n; i++){
      prod*=i;
    }
    return prod;
}
