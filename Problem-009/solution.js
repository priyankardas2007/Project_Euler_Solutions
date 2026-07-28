function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 for(let a= 1;a<n;a++){
  for(let b = 1+a;b < n; b++){
    let c = n-b-a;
    if (a*a + b*b === c*c){
      return a*b*c;
    }
  }
 }
}
