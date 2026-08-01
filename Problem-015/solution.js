function latticePaths(gridSize) {
  let result = 1n;
  for (let i = 1n; i <=BigInt(gridSize); i ++){
    result = result * (BigInt(gridSize)+i)/i;
  }

  return Number(result);
}
