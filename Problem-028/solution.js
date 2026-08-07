function spiralDiagonals(n) {
  let sum = 1;
  for( let size = 3; size<= n; size +=2){
    let square = size*size;
    let step = size - 1;
    sum += square;
    sum += square - step;
    sum += square - 2 * step;
    sum += square - 3 * step;
  }
  return sum;
}
