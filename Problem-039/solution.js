function isRightTriangle(n){
  let maxSolution = 0 ;
  let result = 0;
  for (let p = 1;p<=n;p++){
    let count = 0;
    for(let a = 1; a<p/3; a++){
      for (let b = a+1; b<p/2; b++){
        let c =p-a-b;
        if (a*a+b*b === c*c){
          count ++;
        }
      }
    }
    if ( conut > maxSolution){
      maxSolution = count;
      result = p;
    }
  }
  return result;
}
