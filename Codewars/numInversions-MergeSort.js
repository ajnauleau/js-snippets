
const numInversions = (array) => {

  if(array === undefined) {
    throw new Error("Array must be defined to count inversions");
  }
  if(array.length === 0 || array.length === 1) {
    return 0;
  }

  let inversions = 0;
  sort(array); // merge sort the array and increment
               // when there are crossovers
  console.log(inversions);
  return inversions;


  function sort(array) {
    if(array.length === 1) {
      return array;
    } else {
    let right = array.splice(Math.floor(array.length/2), array.length - 1);
    let left = array;
    return merge(sort(left), sort(right));
    }
  }

  function merge(left, right) {
    let merged = [];
    let l = 0, r = 0;
    let multiplier = 0;
    while(l < left.length || r < right.length) {
      if(l === left.length) {
        merged.push(right[r]);
        r++;
      } else if(r === right.length) {
        merged.push(left[l]);
        l++;
        inversions += multiplier;
      } else if (left[l] < right[r]) {
        merged.push(left[l]);
        inversions += multiplier;
        l++;
      } else {
        merged.push(right[r]);
        r++;
        multiplier++;
      }
    }
    return merged;
  }
}


numInversions([1, 2, 3]) // 0
numInversions([1, 3, 2]) // 1
numInversions([1, 3, 2, 4]) // 1
numInversions([1, 1, 1, 1]); // 0
numInversions([1, 3, 2, 4, 5]) // 1
numInversions([3, 1, 2, 4, 5]) // 2
numInversions([2, 2, 1, 1]); // 4
numInversions([3, 2, 1, 4, 5]) // 3
numInversions([3, 2, 1, 4, 5, 6]) // 3
numInversions([6, 5, 4, 3, 2, 1]) // 15
