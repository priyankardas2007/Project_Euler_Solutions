function oddPeriodSqrts(n) {
  let count = 0;
  for (let N = 2; N<=n; N++){
    let a0 = Math.floor(Math.sqrt(N));
    if(a0*a0 === N) continue;
    let m =0;
    let d= 1;
    let a = a0; 
    let period = 0;
    do{
      m =d*a -m;
      d= (N-m*m)/d;
      a = Math.floor((a0+m)/d);
      period++;
    }while(a!==2*a0);
    if (period%2!==0) count++;
  }

  return count;
}

oddPeriodSqrts(13);
