function digitFibonacci(n) {
  let a = 1n;
  let b = 1n;
  let index = 2;
  while( b.toString().length< n){
    let next = a+b;
    a = b;
    b = next;
    index ++;
  }


  return index;
}
