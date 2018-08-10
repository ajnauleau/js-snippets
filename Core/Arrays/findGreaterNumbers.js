
const findGreaterNumbers = (array) => {
  count = 0;
  for(let i=0; i<array.length; i++) {
    for(let j=i+1; j<array.length; j++) {
      if(array[i] < array[j]) {
        count++
      }
    }
  }
  return count;
}

export default findGreaterNumbers;
