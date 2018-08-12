
// Given a sorted array of numbers, return the length of
// the subarray formed by allowing each number to appear
// at most two times.

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
    console.log(array[i-1]);
    if(cache === array[i]) {
      count++;
    } else {
      count = 1;
    };
    console.log(array[i]);
    console.log(count);
    if(count<=2) {
      sorted.push(array[i]);
    };
    console.log(sorted)
  }
  length = sorted.length;
  console.log('Length: ' + length);
  return length;
};

removeDuplicatesFromSorted([1, 1, 1, 2, 2, 3]); // 5
removeDuplicatesFromSorted([2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]); // 8
removeDuplicatesFromSorted([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]); // 2
removeDuplicatesFromSorted([1, 2, 3, 4, 5, 6]); // 6
removeDuplicatesFromSorted([]); // 0
