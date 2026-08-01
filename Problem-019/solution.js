function countingSundays(firstYear, lastYear) {
  let count = 0;
  for (let year = firstYear; year <= lastYear;year ++){
    for ( let month = 0; month< 12; month ++){
      const date = new Date( year, month, 1);
      if (date.getDay() === 0){
        count ++;

      }
    }
  }
  return count;
}
