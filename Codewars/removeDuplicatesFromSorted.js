
const removeDuplicatesFromSorted = (array) => {
  let sorted = [];
  let count = 0;
  let cache = undefined;
  let length = undefined;
  array.sort((a, b) => {
    return a - b;
  });
  for(let i=0; i<array.length; i++) {
    cache = array[i-1];
    if(cache === array[i]) {
      count++;
    } else {
      count = 1;
    };
    if(count<=2) {
      sorted.push(array[i]);
    };
  }
  length = sorted.length;
  console.log('Length: ' + length);
  return length;
};
