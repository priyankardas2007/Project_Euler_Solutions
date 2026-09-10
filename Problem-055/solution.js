function countLychrelNumbers(num) {
  let count = 0;
  for (let i = 1; i< num ; i++) {
    let temp = i;
    let isLy = true;
    for (let j= 0; j<50; j++){
      temp = temp + reversed(temp);
      if ( pall(temp)){
        isLy =false;
        break;
      }
    }
    if (isLy) count++;
  }
  return count;
}
function reversed(n){
  return Number(n.toString().split("").reverse().join(''));
}
function pall(n){
  return n === reversed(n);
}
