function squareRootConvergents(n) {
  let count = 0;
  let num = 3n;
  let den = 2n;
  for (let i = 1; i <=n;i++){
    if (num.toString().length> den.toString().length) count++;
    [num, den] = [num+ 2n * den,num+ den];
  }
  return count;
}
